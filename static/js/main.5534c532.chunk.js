(this.webpackJsonpmillionaire=this.webpackJsonpmillionaire||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={StartQuiz:"StartQuiz_StartQuiz__2O3MX",thumbsUp:"StartQuiz_thumbsUp__n3X8F",headline:"StartQuiz_headline__agj3G"}},,function(e,t,n){e.exports={Drawer:"Drawer_Drawer__3w1Bp",close:"Drawer_close__5Au5A",active:"Drawer_active__17zUr",unactive:"Drawer_unactive__3szsm"}},,function(e,t,n){e.exports=n.p+"static/media/hand-1.ad6621a0.svg"},function(e,t,n){e.exports={ActiveQuiz:"ActiveQuiz_ActiveQuiz__3sdjV",Question:"ActiveQuiz_Question__2uHtG",question:"ActiveQuiz_question__3iLgo"}},function(e,t,n){e.exports={AnswerItem:"AnswerItem_AnswerItem__3cpKr",correct:"AnswerItem_correct__3EbU4",wrong:"AnswerItem_wrong__3Wy7j",itemSectionStyle:"AnswerItem_itemSectionStyle__2TeYD",selected:"AnswerItem_selected__1G5KS"}},function(e,t,n){e.exports={FinishedQuiz:"FinishedQuiz_FinishedQuiz__161Xp",thumbsUp:"FinishedQuiz_thumbsUp___tbGx",totalScore:"FinishedQuiz_totalScore__PQUwf"}},function(e,t,n){e.exports={Quiz:"Quiz_Quiz__1NHQK",Wrapper:"Quiz_Wrapper__1unif"}},function(e,t,n){e.exports={Wrapper:"Loading_Wrapper__JXqBx",Loading:"Loading_Loading__EPhT8"}},function(e,t,n){e.exports={MenuToggle:"MenuToggle_MenuToggle__mRe8P",open:"MenuToggle_open__i-8UQ"}},,,function(e,t,n){e.exports={Layout:"Layout_Layout__1s2jD"}},function(e,t,n){e.exports={AnswersList:"AnswersList_AnswersList__2TtY8"}},function(e,t,n){e.exports=n.p+"static/media/loader.a3d1f0d1.svg"},,,function(e,t,n){e.exports=n(31)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(19),r=n.n(s),o=(n(30),n(23)),c=n(2),u=n(3),l=n(6),m=n(5),d=n(20),h=n.n(d),p=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:h.a.Layout},i.a.createElement("main",null,this.props.children))}}]),n}(a.Component),v=n(24),_=n(1),w=n(15),g=n.n(w),f=n(12),E=n.n(f),Q=n(21),S=n.n(Q),b=n(13),k=n.n(b),z=n(4),y=n.n(z),L=function(e){var t,n=e.answer,a=n.id,s=n.text,r=e.state,o=e.onAnswerClick,c=y()(k.a.AnswerItem,(t={},Object(_.a)(t,k.a.correct,"correct"===r),Object(_.a)(t,k.a.wrong,"wrong"===r),t));return i.a.createElement("div",{className:c,onClick:function(){o(a)}},s)},A=function(e){var t=e.onAnswerClick,n=e.state;return i.a.createElement("div",{className:S.a.AnswersList},e.answers.map((function(e,a){return i.a.createElement(L,{key:a,answer:e,onAnswerClick:t,state:n?n[e.id]:null})})))},C=n(22),N=n.n(C),j=n(16),O=n.n(j),F=function(){return i.a.createElement("div",{className:O.a.Wrapper},i.a.createElement("img",{src:N.a,className:O.a.Loading,alt:"Loading"}))},W=function(e){var t=e.loading,n=e.question,a=e.state,s=e.answers,r=e.onAnswerClick;return i.a.createElement("div",{className:E.a.ActiveQuiz},t&&i.a.createElement(F,null),i.a.createElement("p",{className:E.a.Question},i.a.createElement("span",{className:E.a.question},n)),i.a.createElement(A,{state:a,answers:s,onAnswerClick:r}))},T=n(14),x=n.n(T),D=n(11),M=n.n(D),U=function(e){var t=e.onClick,n=e.disabled,a=e.children;return i.a.createElement("button",{onClick:t,className:"Button",disabled:n},a)},q=function(e){var t=e.checkpoint,n=e.onRetry;return i.a.createElement("div",{className:x.a.FinishedQuiz},i.a.createElement("div",{className:"imgWrapper"},i.a.createElement("img",{className:x.a.thumbsUp,src:M.a,alt:"Screenshot"})),i.a.createElement("div",{className:x.a.totalScore},i.a.createElement("h2",null,"Total score:"),i.a.createElement("div",{className:"earned"},"$",t," earned"),i.a.createElement(U,{onClick:n},"Try again")))},H=n(9),I=n.n(H),B=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={activeQuestion:0},a}return Object(u.a)(n,[{key:"renderLinks",value:function(){var e=this;return this.props.quizData.map((function(t,n){return i.a.createElement("li",{className:e.getMoneyCssClasses(n,t),key:n},"$ ",t.money)}))}},{key:"getMoneyCssClasses",value:function(e,t){return(this.props.activeQuiz===e?I.a.active:"")||(t.prevQuiz?I.a.unactive:"")}},{key:"render",value:function(){var e=y()([I.a.Drawer],Object(_.a)({},I.a.close,!this.props.isOpen));return i.a.createElement(i.a.Fragment,null,i.a.createElement("nav",{className:e},i.a.createElement("ul",null,this.renderLinks())))}}]),n}(a.Component),G=n(17),X=n.n(G),J=function(e){var t=e.isOpen,n=e.onToggle,a=y()(X.a.MenuToggle,"fa","fa-bars",Object(_.a)({"fa-times":t},X.a.open,t));return i.a.createElement("i",{className:a,onClick:n})},K=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).handleWindowSizeChange=function(){a.setState({width:window.innerWidth})},a.onAnswerClickHandler=function(e){if(!a.state.isFetching)if(a.state.items[a.state.activeQuestion].rightAnswerId!==e)a.setState({isLoading:!0}),setTimeout((function(){a.setState({answerState:Object(_.a)({},e,"wrong")})}),2e3),setTimeout((function(){a.setState({isLoading:!1,isFinished:!0})}),3e3);else{a.setState({isFetching:!0,isLoading:!0}),setTimeout((function(){a.setState({answerState:Object(_.a)({},e,"correct")})}),2e3);var t=setTimeout((function(){a.isQuizFinished()?a.setState({isLoaded:!1,isFinished:!0,checkpoint:a.state.items[a.state.activeQuestion].money}):(a.setState((function(e){var t=e.items,n=Object(v.a)(t);return n[a.state.activeQuestion].prevQuiz=!0,{items:n}})),a.setState({activeQuestion:a.state.activeQuestion+1,answerState:null,checkpoint:a.state.items[a.state.activeQuestion].money,isFetching:!1,isLoading:!1}),clearTimeout(t))}),3e3)}},a.retryHandler=function(){a.setState({isFinished:!1,activeQuestion:0,answerState:null,checkpoint:null})},a.toggleMenuHandler=function(){a.setState({menu:!a.state.menu})},a.menuCloseHandler=function(){a.setState({menu:!1})},a.state={isLoaded:!1,items:[],isFetching:!1,isFinished:!1,activeQuestion:0,answerState:null,checkpoint:null,menu:!1,width:window.innerWidth,isLoading:!1},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://yurii07.github.io/millionaire/data.json").then((function(e){return e.json()})).then((function(t){setTimeout((function(){e.setState({isLoaded:!0,items:t})}),1e3)}),(function(t){e.setState({isLoaded:!0,error:t})})),window.addEventListener("resize",this.handleWindowSizeChange),this.state.width>800?this.setState({menu:!0}):this.setState({menu:!1})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowSizeChange)}},{key:"isQuizFinished",value:function(){return this.state.activeQuestion+1===this.state.items.length}},{key:"render",value:function(){var e=this.state,t=e.width,n=e.error,a=e.isLoaded,s=e.items,r=e.activeQuestion,o=e.answerState,c=e.isLoading,u=e.menu,l=e.checkpoint,m=e.isFinished,d=t<=800;return n?i.a.createElement("div",null,"Error: ",n.message):a?i.a.createElement("div",{className:g.a.Quiz},m?i.a.createElement(q,{onRetry:this.retryHandler,checkpoint:l}):i.a.createElement("div",{className:g.a.Wrapper},i.a.createElement(B,{isOpen:u,onClose:this.menuCloseHandler,quizData:s,activeQuiz:r}),d&&i.a.createElement(J,{onToggle:this.toggleMenuHandler,isOpen:u}),i.a.createElement(W,{answers:s[r].answers,question:s[r].question,onAnswerClick:this.onAnswerClickHandler,quizLength:s.length,answerNumber:r+1,state:o,loading:c}))):i.a.createElement(F,null)}}]),n}(a.Component),P=n(7),R=n.n(P),$=function(e){return i.a.createElement("div",{className:R.a.StartQuiz},i.a.createElement("div",{className:R.a.imgWrapper},i.a.createElement("img",{className:R.a.thumbsUp,src:M.a,alt:"thumbsUp"})),i.a.createElement("div",{className:R.a.startWrapper},i.a.createElement("h1",{className:R.a.headline},"Who wants to be a millionaire?"),i.a.createElement("button",{className:"Button",onClick:e.onClick},"Start")))},Y=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],s=t[1];return i.a.createElement("div",{className:"App"},n?i.a.createElement(p,null,i.a.createElement(K,null)):i.a.createElement($,{onClick:function(){return s(!0)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[25,1,2]]]);
//# sourceMappingURL=main.5534c532.chunk.js.map