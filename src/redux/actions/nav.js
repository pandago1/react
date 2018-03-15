export const PATH = "nav/PATH";

export function path() {
	return {
		type: PATH,
		pathName: location.pathname.replace(/^\//, '')
	}
}
