(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{80:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m}));var l=a(0),n=a.n(l),s=a(109),r=a(108),i=a(16),c=a(24),u=a(63),o=a.n(u);class p extends n.a.Component{constructor(e){super(e),this.state={name:null,owner:{},service:null,service_owner:null,service_name:null,service_full_name:null,private:!0,html_url:null,description:null,fork:!1,clone_url:null,stargazers_count:0,watchers_count:0,language:null,forks:0,open_issues:0,default_branch:null,permissions:null,topics:[],config:null,config_updated:null,active:!0,updated:null,deleted:null}}componentDidMount(){fetch(`${this.props.apiBaseUrl}/repo/data/${this.props.user}/${this.props.repo}`,{credentials:"include"}).then((e=>e.json())).then((e=>this.setState(e)))}render(){return n.a.createElement("section",{className:o.a.profile},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("h3",null,this.state.name),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement(r.a,{to:`/${this.state.owner.displayName}`},this.state.owner.displayName)),n.a.createElement("li",null,"service ",this.state.service),n.a.createElement("li",null,"description ",this.state.description),n.a.createElement("li",null,"stargazers_count ",this.state.stargazers_count),n.a.createElement("li",null,"clone_url ",this.state.clone_url),n.a.createElement("li",null,"language ",this.state.language),n.a.createElement("li",null,"fork ",JSON.stringify(this.state.fork)),n.a.createElement("li",null,"private ",JSON.stringify(this.state.private)),n.a.createElement("li",null,"active ",JSON.stringify(this.state.active)))),n.a.createElement("div",{className:"col"},n.a.createElement("h3",null,"Config"),n.a.createElement("p",null,this.state.config_updated),n.a.createElement("pre",null,this.state.config)))))}}function m(){const{siteConfig:e}=Object(i.default)(),t=Object(c.useRouteMatch)();return n.a.createElement(s.a,{title:t.params.repo},n.a.createElement(p,{apiBaseUrl:e.customFields.apiBaseUrl,user:t.params.user,repo:t.params.repo}))}}}]);