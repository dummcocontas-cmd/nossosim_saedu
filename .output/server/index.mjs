globalThis.__nitro_main__ = import.meta.url;
import { n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-07-30T16:37:56.147Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/gallery-1-DZU-G15i.jpg": {
		"type": "image/jpeg",
		"etag": "\"1e716-QhdT73PojZnlWYnevmyM7gpYEZg\"",
		"mtime": "2026-07-30T19:31:51.068Z",
		"size": 124694,
		"path": "../public/assets/gallery-1-DZU-G15i.jpg"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"25e4a-HTW2m0/GyxIgaM2miKAmubBD86E\"",
		"mtime": "2026-07-30T19:12:27.836Z",
		"size": 155210,
		"path": "../public/favicon.ico"
	},
	"/assets/gallery-11-BVvwL-CU.jpg": {
		"type": "image/jpeg",
		"etag": "\"1c51a-lqBicGScdm03XXBKO8qo2tv8M0Y\"",
		"mtime": "2026-07-30T19:31:51.070Z",
		"size": 115994,
		"path": "../public/assets/gallery-11-BVvwL-CU.jpg"
	},
	"/assets/gallery-10-Bv_UZejn.jpg": {
		"type": "image/jpeg",
		"etag": "\"1d253-XPmNEUCGdIKriDE/bpMFkk/ahjs\"",
		"mtime": "2026-07-30T19:31:51.069Z",
		"size": 119379,
		"path": "../public/assets/gallery-10-Bv_UZejn.jpg"
	},
	"/assets/gallery-2-BwySCNAC.jpg": {
		"type": "image/jpeg",
		"etag": "\"12acb-el4WwJkwd6A8tmTNRQpZ/W0Jh9c\"",
		"mtime": "2026-07-30T19:31:51.071Z",
		"size": 76491,
		"path": "../public/assets/gallery-2-BwySCNAC.jpg"
	},
	"/assets/gallery-3-ZmrpDuqy.jpg": {
		"type": "image/jpeg",
		"etag": "\"1e9d4-8nwlzly9+k2wiNaroQsQJ4yXte8\"",
		"mtime": "2026-07-30T19:31:51.072Z",
		"size": 125396,
		"path": "../public/assets/gallery-3-ZmrpDuqy.jpg"
	},
	"/assets/gallery-4-BaCERNZu.jpg": {
		"type": "image/jpeg",
		"etag": "\"19859-+ZuKrMDX6WcsoTJSySvJGesO8Do\"",
		"mtime": "2026-07-30T19:31:51.073Z",
		"size": 104537,
		"path": "../public/assets/gallery-4-BaCERNZu.jpg"
	},
	"/assets/gallery-12-Ben9wrqY.jpg": {
		"type": "image/jpeg",
		"etag": "\"3e310-+yulD4wiGTyd493n+SFSfCjjnu8\"",
		"mtime": "2026-07-30T19:31:51.070Z",
		"size": 254736,
		"path": "../public/assets/gallery-12-Ben9wrqY.jpg"
	},
	"/assets/gallery-8-C4uDhhgl.jpg": {
		"type": "image/jpeg",
		"etag": "\"1f881-hM0URMAByQxMXkkKLppgWVqC5Vk\"",
		"mtime": "2026-07-30T19:31:51.075Z",
		"size": 129153,
		"path": "../public/assets/gallery-8-C4uDhhgl.jpg"
	},
	"/assets/gallery-6-DSjyuKKf.jpg": {
		"type": "image/jpeg",
		"etag": "\"1a59c-tmfVYztBLfDoeyui9eN0vz/Yvwg\"",
		"mtime": "2026-07-30T19:31:51.074Z",
		"size": 107932,
		"path": "../public/assets/gallery-6-DSjyuKKf.jpg"
	},
	"/assets/gallery-7-BSYpiTh1.jpg": {
		"type": "image/jpeg",
		"etag": "\"27afb-VXDFWkC3N3O5HbWQ1zGFD0mLQTo\"",
		"mtime": "2026-07-30T19:31:51.074Z",
		"size": 162555,
		"path": "../public/assets/gallery-7-BSYpiTh1.jpg"
	},
	"/assets/gallery-5-CojnOEl0.jpg": {
		"type": "image/jpeg",
		"etag": "\"3744b-mZvfAY4zd//SPbBO3XFve+Cj3k0\"",
		"mtime": "2026-07-30T19:31:51.073Z",
		"size": 226379,
		"path": "../public/assets/gallery-5-CojnOEl0.jpg"
	},
	"/assets/gallery-9-BnDKtxN0.jpg": {
		"type": "image/jpeg",
		"etag": "\"2ac7b-gUn4ayVIAx+P+ITrM5AUv0PAf5k\"",
		"mtime": "2026-07-30T19:31:51.077Z",
		"size": 175227,
		"path": "../public/assets/gallery-9-BnDKtxN0.jpg"
	},
	"/assets/routes-CR_ie5ee.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2eac7-5rTR/bkvIZb4rIW7WXL0Hd6BNz8\"",
		"mtime": "2026-07-30T19:31:51.016Z",
		"size": 191175,
		"path": "../public/assets/routes-CR_ie5ee.js"
	},
	"/assets/index-B0M_6NXS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"54ad7-AQZO+eFhEMrXkiZAmrcip+aEHVI\"",
		"mtime": "2026-07-30T19:31:51.015Z",
		"size": 346839,
		"path": "../public/assets/index-B0M_6NXS.js"
	},
	"/assets/sprig-blossom-B2ye_Q7-.png": {
		"type": "image/png",
		"etag": "\"26555-v1ixXvoSKmBt7RVHxVx9cFFj8bM\"",
		"mtime": "2026-07-30T19:31:51.081Z",
		"size": 157013,
		"path": "../public/assets/sprig-blossom-B2ye_Q7-.png"
	},
	"/assets/sprig-olive-ClERFs2A.png": {
		"type": "image/png",
		"etag": "\"4694d-8LaIMxjq22fae4O9HH+KEF+VmFo\"",
		"mtime": "2026-07-30T19:31:51.083Z",
		"size": 289101,
		"path": "../public/assets/sprig-olive-ClERFs2A.png"
	},
	"/assets/sprig-eucalyptus-c51-iFi2.png": {
		"type": "image/png",
		"etag": "\"2a629-qwrvqRkFFZm0pe0NjNKu2XKFMBU\"",
		"mtime": "2026-07-30T19:31:51.082Z",
		"size": 173609,
		"path": "../public/assets/sprig-eucalyptus-c51-iFi2.png"
	},
	"/assets/styles-BZyHIXIM.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1677b-2BC17Xj2enWJoDYfDe5vEmc8bpw\"",
		"mtime": "2026-07-30T19:31:51.084Z",
		"size": 92027,
		"path": "../public/assets/styles-BZyHIXIM.css"
	},
	"/assets/corner-br-BMENKy5T.png": {
		"type": "image/png",
		"etag": "\"e1cd9-6J0k3weOx/cu4wrb2+fcq0mP1+E\"",
		"mtime": "2026-07-30T19:31:51.066Z",
		"size": 924889,
		"path": "../public/assets/corner-br-BMENKy5T.png"
	},
	"/assets/corner-tl-BnIuxa4n.png": {
		"type": "image/png",
		"etag": "\"c90d2-w5e9JMG+JOFZuW+Fmzis7/F5QN8\"",
		"mtime": "2026-07-30T19:31:51.067Z",
		"size": 823506,
		"path": "../public/assets/corner-tl-BnIuxa4n.png"
	},
	"/assets/bouquet-main-Cc6TcYPy.png": {
		"type": "image/png",
		"etag": "\"1b7fec-Lu0bLWkAINQFLb+oNtPSgfblXm0\"",
		"mtime": "2026-07-30T19:31:51.021Z",
		"size": 1802220,
		"path": "../public/assets/bouquet-main-Cc6TcYPy.png"
	},
	"/assets/wax-seal-JqJcZ9hm.png": {
		"type": "image/png",
		"etag": "\"174eee-m0KnY3eRO9ATV8CpyW9cU2ZVeHg\"",
		"mtime": "2026-07-30T19:31:51.086Z",
		"size": 1527534,
		"path": "../public/assets/wax-seal-JqJcZ9hm.png"
	},
	"/assets/music-C5DzIoet.mp3": {
		"type": "audio/mpeg",
		"etag": "\"277143-NDFfYQ9GVRGFKjQqkqu2cHkfIIY\"",
		"mtime": "2026-07-30T19:31:51.080Z",
		"size": 2584899,
		"path": "../public/assets/music-C5DzIoet.mp3"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_siivcS = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_siivcS
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
