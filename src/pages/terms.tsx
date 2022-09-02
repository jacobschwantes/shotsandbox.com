import Script from "next/script";
const Terms = () => (
  <div className="w-full h-full bg-black">
    <div
      className="bg-black max-w-6xl mx-auto pt-16"
      //@ts-ignore
      name="termly-embed"
      data-id="d84722d7-35f6-41f0-a416-bdb04899789c"
      data-type="iframe"
    ></div>
    <Script id="terms" type="text/javascript">{`(function(d, s, id) {
  var js, tjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://app.termly.io/embed-policy.min.js";
  tjs.parentNode.insertBefore(js, tjs);
}(document, 'script', 'termly-jssdk'));`}</Script>
  </div>
);
export default Terms;
