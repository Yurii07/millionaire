(this.webpackJsonpmillionaire=this.webpackJsonpmillionaire||[]).push([[0],[,,,,,function(e,t,n){e.exports={StartQuiz:"StartQuiz_StartQuiz__2O3MX",thumbsUp:"StartQuiz_thumbsUp__n3X8F",headline:"StartQuiz_headline__agj3G"}},function(e,t,n){e.exports={Drawer:"Drawer_Drawer__3w1Bp",close:"Drawer_close__5Au5A",active:"Drawer_active__17zUr",unactive:"Drawer_unactive__3szsm"}},function(e,t,n){e.exports=n.p+"static/media/hand-1.ad6621a0.svg"},function(e,t,n){e.exports={ActiveQuiz:"ActiveQuiz_ActiveQuiz__3sdjV",Question:"ActiveQuiz_Question__2uHtG",question:"ActiveQuiz_question__3iLgo"}},function(e,t,n){e.exports={FinishedQuiz:"FinishedQuiz_FinishedQuiz__161Xp",thumbsUp:"FinishedQuiz_thumbsUp___tbGx",totalScore:"FinishedQuiz_totalScore__PQUwf"}},,function(e,t,n){e.exports={Quiz:"Quiz_Quiz__1NHQK",Wrapper:"Quiz_Wrapper__1unif"}},function(e,t,n){e.exports={AnswerItem:"AnswerItem_AnswerItem__3cpKr",correct:"AnswerItem_correct__3EbU4",wrong:"AnswerItem_wrong__3Wy7j",itemSectionStyle:"AnswerItem_itemSectionStyle__2TeYD",selected:"AnswerItem_selected__1G5KS"}},function(e,t,n){e.exports={MenuToggle:"MenuToggle_MenuToggle__mRe8P",open:"MenuToggle_open__i-8UQ"}},,,,function(e,t,n){e.exports={Layout:"Layout_Layout__1s2jD"}},function(e,t,n){e.exports={AnswersList:"AnswersList_AnswersList__2TtY8"}},function(e,t,n){e.exports=n.p+"static/media/loader.a3d1f0d1.svg"},function(e,t,n){e.exports={Loading:"Loading_Loading__EPhT8"}},function(e,t,n){e.exports={Button:"Button_Button__2bxnt",error:"Button_error__3yD6a",success:"Button_success__9LQr7",primary:"Button_primary__1hEOW"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3jQ4f"}},function(e,t,n){e.exports=n(29)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(16),r=n.n(s),o=(n(28),n(14)),c=n(1),u=n(2),l=n(4),m=n(3),h=n(17),p=n.n(h),d=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:p.a.Layout},i.a.createElement("main",null,this.props.children))}}]),n}(a.Component),_=n(10),v=n(11),w=n.n(v),f=n(8),g=n.n(f),Q=n(18),z=n.n(Q),E=n(12),k=n.n(E),S=function(e){var t=[k.a.AnswerItem];return e.state&&(console.log(e.state),t.push(k.a[e.state])),i.a.createElement("div",{className:t.join(" "),onClick:function(){e.onAnswerClick(e.answer.id)}},e.answer.text)},b=function(e){return i.a.createElement("div",{className:z.a.AnswersList},e.answers.map((function(t,n){return i.a.createElement(S,{key:n,answer:t,onAnswerClick:e.onAnswerClick,state:e.state?e.state[t.id]:null})})))},y=n(19),A=n.n(y),j=n(20),C=n.n(j),N=function(){return i.a.createElement("div",null,i.a.createElement("img",{src:A.a,className:C.a.Loading,alt:"Loading"}))},L=function(e){e.answerNumber;var t=e.question,n=(e.quizLength,e.state),a=e.answers,s=e.onAnswerClick;e.onLoad;return i.a.createElement("div",{className:g.a.ActiveQuiz},e.loading&&i.a.createElement(N,null),i.a.createElement("p",{className:g.a.Question},i.a.createElement("span",{className:g.a.question},t)),i.a.createElement(b,{state:n,answers:a,onAnswerClick:s}))},O=n(9),D=n.n(O),q=n(7),F=n.n(q),x=n(21),W=n.n(x),B=function(e){W.a.Button;return i.a.createElement("button",{onClick:e.onClick,className:"Button",disabled:e.disabled},e.children)},T=function(e){return i.a.createElement("div",{className:D.a.FinishedQuiz},i.a.createElement("div",{className:"imgWrapper"},i.a.createElement("img",{className:D.a.thumbsUp,src:F.a,alt:"Screenshot"})),i.a.createElement("div",{className:D.a.totalScore},i.a.createElement("h2",null,"Total score:"),i.a.createElement("div",{className:"earned"},"$",e.checkpoint," earned"),i.a.createElement(B,{onClick:e.onRetry},"Try again")))},M=n(6),U=n.n(M),H=(n(22),function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={activeQuestion:0},a}return Object(u.a)(n,[{key:"renderLinks",value:function(){var e=this;return this.props.quizData.map((function(t,n){return i.a.createElement("li",{className:e.getMoneyCssClasses(n,t),key:n},"$ ",t.money)}))}},{key:"getMoneyCssClasses",value:function(e,t){return(this.props.activeQuiz===e?U.a.active:"")||(t.prevQuiz?U.a.unactive:"")}},{key:"render",value:function(){console.log(this.props.activeQuiz,"this.props.activeQuiz Drawer");var e=[U.a.Drawer];return this.props.isOpen||e.push(U.a.close),i.a.createElement(i.a.Fragment,null,i.a.createElement("nav",{className:e.join(" ")},i.a.createElement("ul",null,this.renderLinks())))}}]),n}(a.Component)),I=n(13),G=n.n(I),K=function(e){var t=[G.a.MenuToggle,"fa"];return e.isOpen?(t.push("fa-times"),t.push(G.a.open)):t.push("fa-bars"),i.a.createElement("i",{className:t.join(" "),onClick:e.onToggle})},P=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleWindowSizeChange=function(){a.setState({width:window.innerWidth})},a.onAnswerClickHandler=function(e){if(!a.state.isFetching)if(a.props.quizData[a.state.activeQuestion].rightAnswerId!==e)a.setState({answerState:Object(_.a)({},e,"wrong")}),setTimeout((function(){a.setState({isFinished:!0})}),2e3);else{a.setState({answerState:Object(_.a)({},e,"correct")}),a.setState({isFetching:!0,isLoading:!0});var t=setTimeout((function(){a.isQuizFinished()?a.setState({isFinished:!0,checkpoint:a.props.quizData[a.state.activeQuestion].money}):(a.props.quizData[a.state.activeQuestion].prevQuiz=!0,a.setState({activeQuestion:a.state.activeQuestion+1,answerState:null,checkpoint:a.props.quizData[a.state.activeQuestion].money,isFetching:!1,isLoading:!1}),clearTimeout(t))}),2e3)}},a.retryHandler=function(){a.setState({isFinished:!1,activeQuestion:0,answerState:null,checkpoint:null})},a.toggleMenuHandler=function(){a.setState({menu:!a.state.menu})},a.menuCloseHandler=function(){a.setState({menu:!1})},a.state={isFetching:!1,isFinished:!1,activeQuestion:0,answerState:null,checkpoint:null,menu:!1,width:window.innerWidth,isLoading:!1},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleWindowSizeChange),this.state.width>800?this.setState({menu:!0}):this.setState({menu:!1})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowSizeChange)}},{key:"isQuizFinished",value:function(){return this.state.activeQuestion+1===this.props.quizData.length}},{key:"render",value:function(){var e=this.state.width<=800;return i.a.createElement("div",{className:w.a.Quiz},this.state.isFinished?i.a.createElement(T,{onRetry:this.retryHandler,checkpoint:this.state.checkpoint}):i.a.createElement("div",{className:w.a.Wrapper},i.a.createElement(H,{isOpen:this.state.menu,onClose:this.menuCloseHandler,quizData:this.props.quizData,activeQuiz:this.state.activeQuestion}),e&&i.a.createElement(K,{onToggle:this.toggleMenuHandler,isOpen:this.state.menu}),i.a.createElement(L,{answers:this.props.quizData[this.state.activeQuestion].answers,question:this.props.quizData[this.state.activeQuestion].question,onAnswerClick:this.onAnswerClickHandler,quizLength:this.props.quizData.length,answerNumber:this.state.activeQuestion+1,state:this.state.answerState,loading:this.state.isLoading})))}}]),n}(a.Component),R=n(5),X=n.n(R),$=function(e){return i.a.createElement("div",{className:X.a.StartQuiz},i.a.createElement("div",{className:X.a.imgWrapper},i.a.createElement("img",{className:X.a.thumbsUp,src:F.a,alt:"thumbsUp"})),i.a.createElement("div",{className:X.a.startWrapper},i.a.createElement("h1",{className:X.a.headline},"Who wants to be a millionaire?"),i.a.createElement("button",{className:"Button",onClick:e.onClick},"Start")))},J=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)([]),c=Object(o.a)(r,2),u=c[0],l=c[1];Object(a.useEffect)((function(){fetch("https://yurii07.github.io/millionaire/data.json").then((function(e){return e.json()})).then((function(e){console.log(e,"data"),l(e)})).catch((function(e){return console.error((void 0).props.url,e.toString())}))}),[]);return i.a.createElement("div",{className:"App"},n?i.a.createElement(d,null,i.a.createElement(P,{quizData:u})):i.a.createElement($,{onClick:function(){return s(!0)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[23,1,2]]]);
//# sourceMappingURL=main.f1e6c1f3.chunk.js.map