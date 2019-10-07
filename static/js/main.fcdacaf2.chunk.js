(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,o){e.exports=o(37)},27:function(e,t,o){},34:function(e,t,o){},35:function(e,t,o){},36:function(e,t,o){},37:function(e,t,o){"use strict";o.r(t);var n=o(0),r=o.n(n),a=o(5),s=o.n(a),c=(o(27),o(3)),i=o(10),l=o.n(i),u=o(13),d=o(14),m=o(15),p=o(20),f=o(16),E=o(21),b=o(6),O=o(17),y=o(19),h=o(4),L=o(18);function _(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)}return o}function T(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?_(o,!0).forEach(function(t){Object(O.a)(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):_(o).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}var j={todos:[],filteredTodos:[],isLoading:!1,hasError:!1,isLoaded:!1},N=Object(h.c)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(console.log(e.todos),t.type){case"START_LOADING":return T({},e,{isLoading:!0});case"HANDLE_ERORR":return T({},e,{isLoading:!1,hasError:!0});case"HANDLE_SUCCESS":return T({},e,{todos:t.todos,filteredTodos:t.todos,isLoading:!1,hasError:!1,isLoaded:!0});case"SORT_BY_TITLE":return T({},e,{filteredTodos:Object(b.a)(e.todos).sort(function(e,t){return e.title.localeCompare(t.title)})});case"SORT_BY_NAME":return T({},e,{filteredTodos:Object(b.a)(e.todos).sort(function(e,t){return e.user.name.localeCompare(t.user.name)})});case"SORT_BY_COMPLETED":return T({},e,{filteredTodos:Object(b.a)(e.todos).sort(function(e,t){return e.completed>t.completed?-1:1})});default:return e}},Object(h.a)(L.a)),v=(o(34),function(e){var t=e.user,o=t.username,n=t.name,a=t.phone,s=t.website,c=t.address;return r.a.createElement("div",{className:"user"},r.a.createElement("p",{className:"user__username"},o),r.a.createElement("p",{className:"user__name"},n),r.a.createElement("p",{className:"user__city"},c.city),r.a.createElement("p",{className:"user__phone"},a),r.a.createElement("p",{className:"user__website"},s))}),g=(o(35),function(e){var t=e.todo,o=t.completed,n=t.id,a=t.title,s=t.user;return r.a.createElement("div",{className:"todo-item"},r.a.createElement("p",{className:"todo-item__id"},n),r.a.createElement("p",{className:"todo-item__title"},a),r.a.createElement(v,{user:s}),r.a.createElement("p",null,o?" \u2714":" \u2716"))}),w=(o(36),function(e){var t=e.filteredTodosList,o=e.isLoaded,n=e.sortByTitle,a=e.sortByName,s=e.sortByCompleted;return r.a.createElement("div",null,o&&r.a.createElement("div",{className:"buttons-sort"},r.a.createElement("button",{type:"button",onClick:n},"Sort by title"),r.a.createElement("button",{type:"button",onClick:a},"Sort by Name"),r.a.createElement("button",{type:"button",onClick:s},"Completed")),r.a.createElement("div",{className:"todo-list"},t.map(function(e){return r.a.createElement(g,{key:e.id,todo:e})})))}),C=Object(c.b)(function(e){return{filteredTodosList:e.filteredTodos,isLoaded:e.isLoaded}},function(e){return{sortByTitle:function(){return e({type:"SORT_BY_TITLE"})},sortByName:function(){return e({type:"SORT_BY_NAME"})},sortByCompleted:function(){return e({type:"SORT_BY_COMPLETED"})}}})(w),S=function(e){function t(){var e,o;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(o=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).loadTodosList=Object(u.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.props.loadTodos();case 2:case"end":return e.stop()}},e)})),o}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.hasError,o=e.isLoaded,n=e.isLoading;return t?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Conection problem"),r.a.createElement("button",{type:"button",className:"button-load",onClick:this.loadTodosList,disabled:n},n?"Loading...":"Load")):r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Redux list of todos"),!o&&r.a.createElement("button",{type:"button",className:"button-load",onClick:this.loadTodosList,disabled:n},n?"Loading...":"Load"),o&&r.a.createElement(C,null))}}]),t}(r.a.Component),R=Object(c.b)(function(e){return{isLoading:e.isLoading,isLoaded:e.isLoaded,hasError:e.hasError}},function(e){return{loadTodos:function(){return e(function(e){return e({type:"START_LOADING"}),Promise.all([fetch("https://jsonplaceholder.typicode.com/users"),fetch("https://jsonplaceholder.typicode.com/todos")]).then(function(e){return Promise.all(e.map(function(e){return e.json()}))}).then(function(t){var o=Object(y.a)(t,2),n=o[0],r=o[1].map(function(e){return T({},e,{user:n.find(function(t){return t.id===e.userId})})});console.log(r),e(function(e){return{type:"HANDLE_SUCCESS",todos:e}}(r))}).catch(function(){return e({type:"HANDLE_ERORR"})})})}}})(S);s.a.render(r.a.createElement(c.a,{store:N},r.a.createElement(R,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.fcdacaf2.chunk.js.map