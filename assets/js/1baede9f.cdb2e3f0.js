(self.webpackChunkstructuredai=self.webpackChunkstructuredai||[]).push([[194],{8664:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return d}});var n=l(3552),r=l(7294),s=l(2611),a=l(6742),i=l(2263),o=l(5977),c=l(7618),u="repo_yH_7",p="explanation_n41l",m=function(e){function t(t){var l;return(l=e.call(this,t)||this).state={name:null,owner:{},service:null,service_owner:null,service_name:null,service_full_name:null,private:!0,html_url:null,description:null,fork:!1,clone_url:null,stargazers_count:0,watchers_count:0,language:null,forks:0,open_issues:0,default_branch:null,permissions:null,topics:[],config:null,config_updated:null,active:!0,updated:null,deleted:null},l}(0,n.Z)(t,e);var l=t.prototype;return l.componentDidMount=function(){var e=this;fetch(this.props.apiBaseUrl+"/repo/data/"+this.props.user+"/"+this.props.repo,{credentials:"include"}).then((function(e){return e.json()})).then((function(t){return e.setState(t)}))},l.render=function(){return r.createElement("section",{className:u},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col"},r.createElement("h3",null,this.state.name),r.createElement("p",null,r.createElement("img",{src:this.props.apiBaseUrl+"/repo/badge/"+this.props.user+"/"+this.props.repo+".svg"})),r.createElement("ul",null,r.createElement("li",null,"topics ",this.state.topics.join(", ")),r.createElement("li",null,r.createElement(a.Z,{to:"/"+this.state.owner.displayName},this.state.owner.displayName)),r.createElement("li",null,"service ",this.state.service),r.createElement("li",null,"description ",this.state.description),r.createElement("li",null,"stargazers_count ",this.state.stargazers_count),r.createElement("li",null,"clone_url ",this.state.clone_url),r.createElement("li",null,"language ",this.state.language),r.createElement("li",null,"fork ",JSON.stringify(this.state.fork)),r.createElement("li",null,"private ",JSON.stringify(this.state.private)),r.createElement("li",null,"active ",JSON.stringify(this.state.active)))),r.createElement("div",{className:"col"},r.createElement("h3",null,"Widget"),r.createElement("image-upload",{model:this.props.user+"/"+this.props.repo}),r.createElement("p",{className:p},"The above widget can be embedded on any website with the below tag. More info in our ",r.createElement(a.Z,{to:"/docs/widgets"},"Widget doc"),"."),r.createElement("pre",null,'<image-upload model="'+this.props.user+"/"+this.props.repo+'"></image-upload>'),r.createElement("h3",null,"Prediction API"),r.createElement("pre",null,"https://api.structuredai.com/prediction/"+this.props.user+"/"+this.props.repo),r.createElement("p",{className:p},"This API endpoint accepts POST requests with a single image and returns JSON formatted predictions. More info in our ",r.createElement(a.Z,{to:"/docs/prediction_api"},"Prediction API doc"),"."),r.createElement("h3",null,"Config"),r.createElement("p",null,this.state.config_updated),r.createElement("pre",null,this.state.config)))))},t}(r.Component);function d(){var e=(0,i.default)().siteConfig,t=(0,o.$B)();return(0,c.init)({api:e.customFields.apiBaseUrl,web:e.customFields.webBaseUrl,showFooter:!1,token:e.customFields.apiToken}),r.createElement(s.Z,{title:t.params.repo},r.createElement(m,{apiBaseUrl:e.customFields.apiBaseUrl,user:t.params.user,repo:t.params.repo}))}}}]);