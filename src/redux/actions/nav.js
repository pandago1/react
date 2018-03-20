export const PATH = "nav/PATH";

export function path() {
	return {
		type: PATH,
		pathName: location.hash.replace(/^#\//, '')
	}
}

// BrowserRolocation.hash.replace(/^#\//, '')uter TODO 以上上node的时候启用
// pathName:location.pathname.replace(/^\//, '')

