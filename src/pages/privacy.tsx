import Script from "next/script";
const Privacy = () => (
  <div className="w-full h-full min-h-screen">
    <div
      className="max-w-6xl mx-auto pt-16"
      //@ts-ignore
      name="termly-embed"
      data-id="1fa34cc3-1c4f-4c9a-aac1-5beb22eaef48"
      data-type="iframe"
    ></div>
    <Script id="privacy" type="text/javascript">{`(function(d, s, id) {
  var js, tjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://app.termly.io/embed-policy.min.js";
  tjs.parentNode.insertBefore(js, tjs);
}(document, 'script', 'termly-jssdk'));`}</Script>
  </div>
);
export default Privacy;
