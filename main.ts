// @ts-ignore
import { Webview, SizeHint } from "jsr:@webview/webview";

// @ts-ignore
const htmlContent = await Deno.readTextFile("./index.html");
const webview = new Webview();

webview.title = "Aura Weather";
webview.size = { width: 450, height: 720, hint: SizeHint.NONE };
webview.navigate(`data:text/html;charset=utf-8,${encodeURIComponent(htmlContent)}`);
webview.run();