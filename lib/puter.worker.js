const PROJECT_PREFIX = "ruya_project_"

const CORS_HEADERS = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, puter-auth',
}

const jsonError = (status, message, extra = {}) => {
    return new Response(JSON.stringify({ error: message, ...extra }), {
        status,
        headers: CORS_HEADERS
    })
}

const jsonOk = (data) => {
    return new Response(JSON.stringify(data), {
        status: 200,
        headers: CORS_HEADERS
    })
}

const getUserid = async (userPuter) => {
    try {
        const user = await userPuter.auth.getUser()
        return user?.uuid || null
    } catch (e) {
        return null
    }
}

router.options("/api/projects/save", () => new Response(null, { status: 204, headers: CORS_HEADERS }))
router.options("/api/projects/list", () => new Response(null, { status: 204, headers: CORS_HEADERS }))
router.options("/api/projects/get",  () => new Response(null, { status: 204, headers: CORS_HEADERS }))

router.post("/api/projects/save", async ({ request, user }) => {
    try {
        const userPuter = user.puter

        if (!userPuter) return jsonError(401, 'Unauthorized', { message: 'User is not authenticated' })

        const body = await request.json()
        const project = body?.project;

        if (!project?.id || !project?.sourceImage) return jsonError(400, 'Invalid project data', { message: 'Project ID or source image is missing' });

        const payload = {
            ...project,
            updatedAt: new Date().toISOString(),
        }

        const userId = await getUserid(userPuter)
        if (!userId) return jsonError(401, 'Unauthorized', { message: 'User ID could not be retrieved' })


        const projectKey = `${PROJECT_PREFIX}${project.id}`
        await userPuter.kv.set(projectKey, payload)
        return jsonOk({
            saved: true,
            id: project.id,
            project: payload
        })
    } catch (e) {
        return jsonError(500, 'Failed to save project', { message: e.message || 'Unknown error' })
    }
})

router.get("/api/projects/list", async ({ user }) => {
    try {
        const userPuter = user.puter

        if (!userPuter) return jsonError(401, 'Unauthorized', { message: 'User is not authenticated' })

        const userId = await getUserid(userPuter)
        if (!userId) return jsonError(401, 'Unauthorized', { message: 'User ID could not be retrieved' })

        const keys = await userPuter.kv.list(`${PROJECT_PREFIX}`,true)
        const projects = await Promise.all(
            keys.map((key) => userPuter.kv.get(key))
        )

        return jsonOk({ projects })
    } catch (e) {
        return jsonError(500, 'Failed to list projects', { message: e.message || 'Unknown error' })
    }
})

router.get("/api/projects/get", async ({ request, user }) => {
    try {
        const userPuter = user.puter

        if (!userPuter) return jsonError(401, 'Unauthorized', { message: 'User is not authenticated' })

        const userId = await getUserid(userPuter)
        if (!userId) return jsonError(401, 'Unauthorized', { message: 'User ID could not be retrieved' })

        const { searchParams } = new URL(request.url)
        const id = searchParams.get('id')

        if (!id) return jsonError(400, 'Bad Request', { message: 'Missing required query parameter: id' })

        const projectKey = `${PROJECT_PREFIX}${id}`
        const project = await userPuter.kv.get(projectKey)

        if (!project) return jsonError(404, 'Not Found', { message: `No project found with id: ${id}` })

        return jsonOk({ project })
    } catch (e) {
        return jsonError(500, 'Failed to get project', { message: e.message || 'Unknown error' })
    }
})