(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(e,t,a){e.exports={statistics:"Statistics_statistics__2pnLM",list:"Statistics_list__3lBO6"}},,function(e,t,a){e.exports={feedback:"FeedbackOptions_feedback__1YTGW",button:"FeedbackOptions_button__UwVR_"}},function(e,t,a){e.exports={section:"Section_section__-LVn0",title:"Section_title__eVBcx"}},,,,,function(e,t,a){e.exports={message:"Notification_message__32FjA"}},,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(6),i=a.n(s),o=(a(17),a(7)),r=a(8),l=a(9),d=a(12),b=a(11),u=(a(18),a(2)),j=a.n(u),h=a(0);var f=function(e){var t=e.good,a=e.neutral,c=e.bad,n=e.total,s=e.positivePercentage;return Object(h.jsxs)("ul",{className:j.a.statistics,children:[Object(h.jsxs)("li",{className:j.a.list,children:["Good: ",t," "]}),Object(h.jsxs)("li",{className:j.a.list,children:["Neutral: ",a," "]}),Object(h.jsxs)("li",{className:j.a.list,children:["Bad: ",c]}),Object(h.jsxs)("li",{className:j.a.list,children:["Total: ",n]}),Object(h.jsxs)("li",{className:j.a.list,children:["Pozitive feedback: ",s,"% "]})]})},v=a(4),O=a.n(v);var k=function(e){var t=e.options,a=e.onLeaveFeedback;return Object(h.jsx)("div",{className:O.a.feedback,children:t.map((function(e){return Object(h.jsx)("button",{type:"button",className:O.a.button,name:e,onClick:function(){return a(e)},children:e[0].toUpperCase()+e.slice(1)},e)}))})},x=a(5),p=a.n(x);var g=function(e){var t=e.title,a=e.children;return Object(h.jsxs)("section",{className:p.a.section,children:[t&&Object(h.jsx)("h1",{className:p.a.title,children:t}),a]})},m=a(10),_=a.n(m);function F(e){var t=e.message;return Object(h.jsx)("div",{className:_.a.message,children:t})}var N=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(r.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={good:0,neutral:0,bad:0},e.leaveFeedback=function(t){e.setState((function(e){return Object(o.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.state.good;return Math.round(100*t/e.countTotalFeedback())||0},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,c=e.bad;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(g,{title:"Please leave feedback",children:Object(h.jsx)(k,{options:["good","neutral","bad"],onLeaveFeedback:this.leaveFeedback})}),Object(h.jsx)(g,{title:"Statistics",children:0!==this.countTotalFeedback()?Object(h.jsx)(f,{good:t,neutral:a,bad:c,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(h.jsx)(F,{message:"No feedback given"})})]})}}]),a}(c.Component);i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(N,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.f318ac92.chunk.js.map