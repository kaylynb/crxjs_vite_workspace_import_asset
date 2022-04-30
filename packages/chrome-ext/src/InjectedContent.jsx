import { Logo } from "@crxjs_vite_workspace_import_asset/main/src/Logo"

export const InjectedContent = () =>
	<>
		<h1>Injected</h1>
		<img src={chrome.runtime.getURL(Logo)} />
	</>
