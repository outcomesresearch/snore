(function(){var e={4883:function(e,t,n){var s={"./Shared.scss":847,"./apple-touch-icon.png":2642,"./favicon-32x32.png":8068,"./logo.svg":7125};function i(e){var t=o(e);return n(t)}function o(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}i.keys=function(){return Object.keys(s)},i.resolve=o,e.exports=i,i.id=4883},5177:function(e,t,n){"use strict";var s,i=n(9584),o=(n(6992),n(8674),n(9601),n(7727),n(144)),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("outcomes-research-wrapper",{attrs:{_title:"SNORE Questionnaire"}},[n("v-app",[n("outcomes-navbar"),n("Questionnaire"),n("outcomes-footer",{attrs:{copyright:e.t(e.k.FOOTER_COPYRIGHT)}})],1)],1)},a=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card-stepper mx-auto pa-3 pa-sm-12 text-left"},[n("header-card"),n("v-card",{staticClass:"mb-12"},[n("div",[n("v-form",{ref:"form1",attrs:{"lazy-validation":""},model:{value:e.section1.valid,callback:function(t){e.$set(e.section1,"valid",t)},expression:"section1.valid"}},[n("v-card-subtitle",{staticClass:"step-label"},[e._v(" "+e._s(e.t(e.k.SECTION1_INSTRUCTIONS_1))+" ")]),n("v-card-text",{staticClass:"question-group pb-5"},e._l(e.section1.prompts,(function(t,s){return n("div",{key:t,staticClass:"question-row"},[n("div",{staticClass:"question-group-header"},[e._v(e._s(e.t(e.k[t])))]),n("v-radio-group",{staticClass:"mt-0",attrs:{column:e.isSmallWidth,rules:e.rules},on:{change:function(t){return e.handleStepChange(s,1)}},model:{value:e.section1.values[t],callback:function(n){e.$set(e.section1.values,t,n)},expression:"section1.values[prompt]"}},e._l(e.section1.options,(function(t){return n("v-radio",{key:t.text+t.value,attrs:{label:e.t(e.k[t.text]),value:t.value}})})),1)],1)})),0)],1)],1),n("v-divider",{staticClass:"my-2"})],1),n("v-card",{staticClass:"mb-12"},[n("Important5Table",{attrs:{prompts:e.section1.prompts},on:{"top-five-changed":function(t){return e.top5ItemKeys=t}}})],1),n("v-card",{staticClass:"mb-12"},[n("ResultsTable",{attrs:{allSections:[e.section1],top5ItemKeys:e.top5ItemKeys}})],1),n("v-card",[n("v-card-text",[n("p",{staticClass:"grey--text text--darken-3"},[e._v(" "+e._s(e.t(e.k.INTERPRETATION_1))+" ")]),n("p",{staticClass:"mb-0 grey--text text--darken-3"},[e._v(" "+e._s(e.t(e.k.INTERPRETATION_2))+" ")])])],1)],1)},c=[],u=n(2482),_=n(5082),O=(n(1539),n(1249),n(7327),n(7941),n(6699),n(2023),{FOOTER_COPYRIGHT:"copywright in footer",INTERPRETATION_MILD:"mild descriptor in interpretation table",INTERPRETATION_MODERATE:"moderate descriptor in interpretation table",INTERPRETATION_SEVERE:"severe descriptor in interpretation table",SCORE_ONLY_IN_ENGLISH:"No translations yet discliamer",HEADER_TITLE:"title of top card",HEADER_BODY_1:"first section of top card body",HEADER_BODY_2:"one bold section in top card body",HEADER_BODY_4:"final thank you in top card body",SECTION1_INSTRUCTIONS_1:"first part of instructions for section 1",TOP_5_INSTRUCTIONS:"instructions for choosing 5 most bothersome",SECTION1_OPTION_1:"section 1 option 1",SECTION1_OPTION_2:"section 1 option 2",SECTION1_OPTION_3:"section 1 option 3",SECTION1_OPTION_4:"section 1 option 4",SECTION1_OPTION_5:"section 1 option 5",SECTION1_OPTION_6:"section 1 option 6",SECTION1_PROMPT_1:"section 1 question 1",SECTION1_PROMPT_2:"section 1 question 2",SECTION1_PROMPT_3:"section 1 question 3",SECTION1_PROMPT_4:"section 1 question 4",SECTION1_PROMPT_5:"section 1 question 5",SECTION1_PROMPT_6:"section 1 question 6",SECTION1_PROMPT_7:"section 1 question 7",SECTION1_PROMPT_8:"section 1 question 8",SECTION1_PROMPT_9:"section 1 question 9",SECTION1_PROMPT_10:"section 1 question 10",SECTION1_PROMPT_11:"section 1 question 11",SECTION1_PROMPT_12:"section 1 question 12",SECTION1_PROMPT_13:"section 1 question 13",SECTION1_PROMPT_14:"section 1 question 14",SECTION1_PROMPT_15:"section 1 question 15",SECTION1_PROMPT_16:"section 1 question 16",SECTION1_PROMPT_17:"section 1 question 17",SECTION1_PROMPT_18:"section 1 question 18",SECTION1_PROMPT_19:"section 1 question 19",SECTION1_PROMPT_20:"section 1 question 20",SECTION1_PROMPT_21:"section 1 question 21",SECTION1_PROMPT_22:"section 1 question 22",SECTION1_PROMPT_23:"section 1 question 23",SECTION1_PROMPT_24:"section 1 question 24",SECTION1_PROMPT_25:"section 1 question 25",SECTION1_PROMPT_1_SHORT:"(for grid) section 1 question 1",SECTION1_PROMPT_2_SHORT:"(for grid) section 1 question 2",SECTION1_PROMPT_3_SHORT:"(for grid) section 1 question 3",SECTION1_PROMPT_4_SHORT:"(for grid) section 1 question 4",SECTION1_PROMPT_5_SHORT:"(for grid) section 1 question 5",SECTION1_PROMPT_6_SHORT:"(for grid) section 1 question 6",SECTION1_PROMPT_7_SHORT:"(for grid) section 1 question 7",SECTION1_PROMPT_8_SHORT:"(for grid) section 1 question 8",SECTION1_PROMPT_9_SHORT:"(for grid) section 1 question 9",SECTION1_PROMPT_10_SHORT:"(for grid) section 1 question 10",SECTION1_PROMPT_11_SHORT:"(for grid) section 1 question 11",SECTION1_PROMPT_12_SHORT:"(for grid) section 1 question 12",SECTION1_PROMPT_13_SHORT:"(for grid) section 1 question 13",SECTION1_PROMPT_14_SHORT:"(for grid) section 1 question 14",SECTION1_PROMPT_15_SHORT:"(for grid) section 1 question 15",SECTION1_PROMPT_16_SHORT:"(for grid) section 1 question 16",SECTION1_PROMPT_17_SHORT:"(for grid) section 1 question 17",SECTION1_PROMPT_18_SHORT:"(for grid) section 1 question 18",SECTION1_PROMPT_19_SHORT:"(for grid) section 1 question 19",SECTION1_PROMPT_20_SHORT:"(for grid) section 1 question 20",SECTION1_PROMPT_21_SHORT:"(for grid) section 1 question 21",SECTION1_PROMPT_22_SHORT:"(for grid) section 1 question 22",SECTION1_PROMPT_23_SHORT:"(for grid) section 1 question 23",SECTION1_PROMPT_24_SHORT:"(for grid) section 1 question 24",SECTION1_PROMPT_25_SHORT:"(for grid) section 1 question 25",AVERAGE:"word 'average'",SUM:"word 'sum'",SCORE:"word 'score'",SCORE_WHEN_FORM_COMPLETE:"score wont show until form complete",INTERPRETATION_1:"part 1 of interpreation section",INTERPRETATION_2:"part 2 of interpreation section",INTERPRETATION_TITLE:"title of interpretation table",BASED_ON_SUM:"title of sum column",BASED_ON_AVERAGE:"title of average column",ONLY_INCLUDE_TOP_5:"name of toggle for only including top 5 most important items"}),T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"mb-12"},[n("v-card-title",[n("div",{staticClass:"flow"},[e.foreignLanguageSupport?n("span",{staticClass:"flow-around ml-3 mb-3"},[n("TranslationDropdown")],1):e._e(),e._v(e._s(e.t(e.k.HEADER_TITLE))+" ")])]),n("v-card-text",[n("p",{staticClass:"grey--text text--darken-3"},[e._v(" "+e._s(e.t(e.k.HEADER_BODY_1))+" "),n("strong",{staticClass:"text-decoration-underline"},[e._v(" "+e._s(e.t(e.k.HEADER_BODY_2))+" ")])]),n("p",{staticClass:"mb-0 grey--text text--darken-3"},[e._v(e._s(e.t(e.k.HEADER_BODY_4)))])])],1)},d=[],p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,i=t.attrs;return[n("v-btn",e._g(e._b({attrs:{block:""}},"v-btn",i,!1),s),[null===e.selected?n("v-icon",[e._v("mdi-translate")]):n("span",[n("i",{class:e.getFlagClasses(e.selected.flag)}),n("span",{staticClass:"adjusted"},[e._v(e._s(e.selected.abbr))])])],1)]}}])},[n("v-list",e._l(e.availableCountries,(function(t,s){return n("v-list-item",{key:s,on:{change:function(n){return e.changeLanguage(t)}}},[n("v-list-item-title",[n("i",{class:e.getFlagClasses(t.flag)}),n("span",{staticClass:"adjusted"},[e._v(" "+e._s(t.locale))])])],1)})),1)],1)},f=[],E=(n(8309),[{name:"en_us",locale:"English",flag:"em-flag-us",abbr:"EN"},{name:"es_us",locale:"Español",flag:"em-flag-us",abbr:"ES"},{name:"es_sp",locale:"Español",flag:"em-flag-es",abbr:"ES"},{name:"nl_nl",locale:"Nederlands",flag:"em-flag-nl",abbr:"NL"},{name:"it_it",locale:"Italiano",flag:"em-flag-it",abbr:"IT"},{name:"fr_ca",locale:"Français",flag:"em-flag-ca",abbr:"FR"}]),S={methods:{changeLanguage:function(e){this.selected=e,this.$vuetify.lang.current=e.name},getFlagClasses:function(e){return["mr-2","em",e,"em-svg"]}},computed:{availableCountries:function(){var e=this;return E.filter((function(t){var n=t.name;return null===e.selected?"en_us"!==n:e.selected.name!==n}))}},data:function(){return{selected:null,countries:E}}},m=S,h=n(3736),P=(0,h.Z)(m,p,f,!1,null,null,null),R=P.exports,v={components:{TranslationDropdown:R},data:function(){return{foreignLanguageSupport:!1}}},I=v,g=(0,h.Z)(I,T,d,!1,null,"8832ad58",null),N=g.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card-text",{staticClass:"pa-6"},[n("div",{staticClass:"results-table-title"},[n("div",[e.allFieldsHaveValues?n("div",{staticClass:"results mb-4"},[n("h3",{staticClass:"black--text mb-2"},[e._v(e._s(e.t(e.k.SCORE))+":")]),n("pre",[e._v(e._s(e.t(e.k.AVERAGE))+": "+e._s(e.average.toFixed(3)))]),n("pre",{class:e.scoreOnlyTop5?"onlyTop5":""},[e._v(e._s(e.t(e.k.SUM))+": "+e._s(e.sum))])]):n("h4",{staticClass:"font-italic mb-4"},[e._v(" "+e._s(e.t(e.k.SCORE_WHEN_FORM_COMPLETE))+" ")])]),n("div",{staticClass:"toggle"},[n("v-switch",{staticClass:"v-input--reverse",attrs:{inset:"",disabled:!e.allFieldsHaveValues||e.top5ItemKeys.length<1},scopedSlots:e._u([{key:"label",fn:function(){return[e._v(e._s(e.t(e.k.ONLY_INCLUDE_TOP_5)))]},proxy:!0}]),model:{value:e.top5ToggleChoice,callback:function(t){e.top5ToggleChoice=t},expression:"top5ToggleChoice"}})],1)]),n("v-simple-table",{scopedSlots:e._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left score-interp-title"},[n("div",[e._v(" "+e._s(e.t(e.k.INTERPRETATION_TITLE))+" ")])]),n("th",{staticClass:"text-center"},[n("div",{directives:[{name:"show",rawName:"v-show",value:!e.scoreOnlyTop5,expression:"!scoreOnlyTop5"}]},[e._v(" "+e._s(e.t(e.k.BASED_ON_SUM))+" ")])]),n("th",{staticClass:"text-center"},[n("div",[e._v(e._s(e.t(e.k.BASED_ON_AVERAGE)))])])])]),n("tbody",{staticClass:"text-center",class:e.allFieldsHaveValues?"showOutlines":""},[n("tr",{staticClass:"mild"},[n("td",{staticClass:"text-left"},[e._v(e._s(e.t(e.k.INTERPRETATION_MILD)))]),n("td",[n("div",{directives:[{name:"show",rawName:"v-show",value:!e.scoreOnlyTop5,expression:"!scoreOnlyTop5"}],class:e.isMild({sum:e.sum}).sum&&"outline"},[e._v(" "+e._s(e.isMild({}).phrase.sum)+" ")])]),n("td",[n("div",{class:e.isMild({average:e.average}).average&&"outline"},[e._v(" "+e._s(e.isMild({}).phrase.average)+" ")])])]),n("tr",{staticClass:"moderate"},[n("td",{staticClass:"text-left"},[e._v(e._s(e.t(e.k.INTERPRETATION_MODERATE)))]),n("td",[n("div",{directives:[{name:"show",rawName:"v-show",value:!e.scoreOnlyTop5,expression:"!scoreOnlyTop5"}],class:e.isModerate({sum:e.sum}).sum&&"outline"},[e._v(" "+e._s(e.isModerate({}).phrase.sum)+" ")])]),n("td",[n("div",{class:e.isModerate({average:e.average}).average&&"outline"},[e._v(" "+e._s(e.isModerate({}).phrase.average)+" ")])])]),n("tr",{staticClass:"severe"},[n("td",{staticClass:"text-left"},[e._v(e._s(e.t(e.k.INTERPRETATION_SEVERE)))]),n("td",[n("div",{directives:[{name:"show",rawName:"v-show",value:!e.scoreOnlyTop5,expression:"!scoreOnlyTop5"}],class:e.isSevere({sum:e.sum}).sum&&"outline"},[e._v(" "+e._s(e.isSevere({}).phrase.sum)+" ")])]),n("td",[n("div",{class:e.isSevere({average:e.average}).average&&"outline"},[e._v(" "+e._s(e.isSevere({}).phrase.average)+" ")])])])])]},proxy:!0}])})],1)},M=[],b=n(6084),y=(n(4944),n(3792),n(3948),n(9720),function(e){return e&&e.length?e.map((function(e){var t=e.values;return Object.entries(t).map((function(e){var t=(0,b.Z)(e,2),n=t[1];return n}))})).flat():[]}),Z={props:["allSections","top5ItemKeys"],computed:{allFieldsHaveValues:function(){return y(this.allSections).every((function(e){return null!==e}))},scoreOnlyTop5:function(){return this.top5ItemKeys.length>0&&this.top5ToggleChoice},sectionsToScore:function(){var e=this;return this.scoreOnlyTop5?[{values:this.allSections[0].prompts.filter((function(t){return e.top5ItemKeys.includes(t)})).map((function(t){return e.allSections[0].values[t]}))}]:this.allSections}},methods:{calculateSum:function(){return y(this.sectionsToScore).reduce((function(e,t){return e+t}),0)},calculateAverage:function(){var e=y(this.sectionsToScore),t=e.length;return this.sum/t},handleFormChange:function(){this.allFieldsHaveValues&&(this.sum=this.calculateSum(),this.average=this.calculateAverage())}},watch:{allSections:{handler:function(){this.handleFormChange()},deep:!0},top5ItemKeys:function(){this.top5ItemKeys.length?this.handleFormChange():this.top5ToggleChoice=!1},top5ToggleChoice:function(){this.handleFormChange()}},data:function(){return{sum:void 0,average:void 0,top5ToggleChoice:!1}}},w=Z,H=(0,h.Z)(w,C,M,!1,null,"4bcde4c8",null),k=H.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-card-subtitle",{staticClass:"step-label"},[e._v(" "+e._s(e.t(e.k.TOP_5_INSTRUCTIONS))+" ")]),n("v-card-text",{},[n("div",{staticClass:"_container"},e._l(e.prompts,(function(t,s){return n("div",{key:s,class:e.getClass(t),on:{click:function(n){return e.choseOption(t)}}},[e._v(" "+e._s(e.t(e.k[e.getShortID(t)]))+" ")])})),0)])],1)},q=[],A={props:["prompts"],methods:{getClass:function(e){var t="item pa-2 ";return this.chosenOptions.length>4&&(t+="reachedMax "),this.chosenOptions.includes(e)&&(t+="primary clicked "),t},choseOption:function(e){if(this.chosenOptions.includes(e))this.chosenOptions=this.chosenOptions.filter((function(t){return t!==e}));else{if(this.chosenOptions.length>4)return;this.chosenOptions.push(e)}this.$emit("top-five-changed",this.chosenOptions)}},data:function(){return{chosenOptions:[]}}},D=A,L=(0,h.Z)(D,x,q,!1,null,"3075a09e",null),F=L.exports,B=700,U=function(e){return e.reduce((function(e,t){return(0,_.Z)((0,_.Z)({},e),{},(0,u.Z)({},t,null))}),{})},W=function(e){return e.map((function(e,t){return{text:e,value:t}}))},Y=function(e){return Object.keys(O).filter((function(t){return t.includes(e)&&!t.includes("SHORT")}))},V=Y("SECTION1_PROMPT"),$=Y("SECTION1_OPTION"),j={components:{HeaderCard:N,ResultsTable:k,Important5Table:F},methods:{handleStepChange:function(e,t){parseInt(t)>1&&0===e&&this.$refs["form".concat(parseInt(t)-1)].validate()},onResize:function(){this.isSmallWidth=window.innerWidth<B}},data:function(){return{e6:1,top5ItemKeys:[],isSmallWidth:window.innerWidth<B,rules:[function(e){return null!==e}],section1:{valid:!1,prompts:V,values:U(V),options:W($)}}},mounted:function(){var e=this;this.$nextTick((function(){window.addEventListener("resize",e.onResize)}))},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)}},G=j,K=(0,h.Z)(G,l,c,!1,null,"1e7b3422",null),z=K.exports,Q={name:"App",components:{Questionnaire:z}},J=Q,X=(0,h.Z)(J,r,a,!1,null,null,null),ee=X.exports,te=n(7126),ne=n(707),se=n.n(ne),ie=(n(8556),n(8308)),oe=(0,_.Z)((0,_.Z)({},ie.Z),{},(s={},(0,u.Z)(s,O.FOOTER_COPYRIGHT,"Copyright © 1996 by Jay F. Piccirillo, M. D., Washington University School of Medicine, St. Louis, Missouri"),(0,u.Z)(s,O.INTERPRETATION_MILD,"Mild"),(0,u.Z)(s,O.INTERPRETATION_MODERATE,"Moderate"),(0,u.Z)(s,O.INTERPRETATION_SEVERE,"Severe"),(0,u.Z)(s,O.SCORE_ONLY_IN_ENGLISH,"Score interpretation is temporarily only available in English"),(0,u.Z)(s,O.HEADER_TITLE,"Symptoms of Nocturnal Obstruction and Related Events (SNORE)"),(0,u.Z)(s,O.HEADER_BODY_1,"Below is a list of symptoms and the social/emotional consequences related to your illness. We want to know more about these problems and appreciate you answering the following questions to the best of your ability. There are no good or bad questions, and only you can give us this information. Please assess your problems that occurred within"),(0,u.Z)(s,O.HEADER_BODY_2,"the past two weeks."),(0,u.Z)(s,O.HEADER_BODY_4,"We thank you for your participation."),(0,u.Z)(s,O.SECTION1_INSTRUCTIONS_1,"Taking into consideration the severity of your problem when you experience it and its frequency, please assess each statement below and select its degree of severity."),(0,u.Z)(s,O.TOP_5_INSTRUCTIONS,"Please check the items that most affect your health (maximum of 5 items)."),(0,u.Z)(s,O.SECTION1_OPTION_1,"No problem"),(0,u.Z)(s,O.SECTION1_OPTION_2,"Very mild problem"),(0,u.Z)(s,O.SECTION1_OPTION_3,"Mild or minor problem"),(0,u.Z)(s,O.SECTION1_OPTION_4,"Moderate problem"),(0,u.Z)(s,O.SECTION1_OPTION_5,"Severe problem"),(0,u.Z)(s,O.SECTION1_OPTION_6,"Worst possible problem"),(0,u.Z)(s,O.SECTION1_PROMPT_1,"Waking up during the night; inability to have a good night’s sleep"),(0,u.Z)(s,O.SECTION1_PROMPT_2,"Loud/excessive snoring"),(0,u.Z)(s,O.SECTION1_PROMPT_3,"Restless during sleep"),(0,u.Z)(s,O.SECTION1_PROMPT_4,"Waking up tired"),(0,u.Z)(s,O.SECTION1_PROMPT_5,"Exhaustion, fatigue (e.g. falling asleep while reading a book)"),(0,u.Z)(s,O.SECTION1_PROMPT_6,"Frequent yawning"),(0,u.Z)(s,O.SECTION1_PROMPT_7,"Tiredness behind the wheel"),(0,u.Z)(s,O.SECTION1_PROMPT_8,"Problems with memory and/or concentration"),(0,u.Z)(s,O.SECTION1_PROMPT_9,"Limits productivity at certain moments during the day (e.g. in the evening after work)"),(0,u.Z)(s,O.SECTION1_PROMPT_10,"Limits participation in community, volunteer, religious or spiritual activities"),(0,u.Z)(s,O.SECTION1_PROMPT_11,"Amount of medical care related to sleeping disturbances (e.g. frequent visits to doctors, need to wear a positive pressure mask, cleaning the tracheotomy tube, etc.)"),(0,u.Z)(s,O.SECTION1_PROMPT_12,"Interaction between obstructive sleep disturbances and other medical problems"),(0,u.Z)(s,O.SECTION1_PROMPT_13,"Fear of medical problems limits car trips to other regions or parts of the country"),(0,u.Z)(s,O.SECTION1_PROMPT_14,"Interference with sexual relations"),(0,u.Z)(s,O.SECTION1_PROMPT_15,"Financial burden related to the illness (e.g. cost of medication, doctor visits, laboratory tests, etc.)"),(0,u.Z)(s,O.SECTION1_PROMPT_16,"“Frayed” nerves; “short tempered”"),(0,u.Z)(s,O.SECTION1_PROMPT_17,"Inability to relax; always worried"),(0,u.Z)(s,O.SECTION1_PROMPT_18,"Marital tensions, stress and tension"),(0,u.Z)(s,O.SECTION1_PROMPT_19,"“Foul” temper"),(0,u.Z)(s,O.SECTION1_PROMPT_20,"Inability to maintain a close relationship with partner and/or loved ones"),(0,u.Z)(s,O.SECTION1_PROMPT_21,"Loss of desire for sexual relations"),(0,u.Z)(s,O.SECTION1_PROMPT_22,"Feeling like there is no hope for the future"),(0,u.Z)(s,O.SECTION1_PROMPT_23,"Competencies are questioned"),(0,u.Z)(s,O.SECTION1_PROMPT_24,"Credibility is questioned"),(0,u.Z)(s,O.SECTION1_PROMPT_25,"Changes in your work due to the illness (e.g. a person drives the car instead of you; inability to participate in meetings due to excessive drowsiness)"),(0,u.Z)(s,O.AVERAGE,"Average"),(0,u.Z)(s,O.SUM,"Sum"),(0,u.Z)(s,O.SCORE,"Score"),(0,u.Z)(s,O.SCORE_WHEN_FORM_COMPLETE,"Result will display here when form is complete."),(0,u.Z)(s,O.INTERPRETATION_1,"When taken multiple times, SNORE scores can be used to measure the change in physical and functional problems, functional limitations, and emotional consequences of sleep disorder-related health burdens over time, and as a result of treatment."),(0,u.Z)(s,O.INTERPRETATION_2,"Impact of treatment is assessed with the SNORE Change Score: The difference between SNORE pre-treatment and SNORE post-Treatment average scores. A SNORE Change Score of 0.5 should be considered the minimal clinically important difference, and change scores greater than this should be considered clinically meaningful."),(0,u.Z)(s,O.INTERPRETATION_TITLE,"SNORE Score Interpretation"),(0,u.Z)(s,O.BASED_ON_AVERAGE,"Based on average"),(0,u.Z)(s,O.BASED_ON_SUM,"Based on sum"),(0,u.Z)(s,O.SECTION1_PROMPT_1_SHORT,"Waking up during the night; inability to have a good night’s sleep"),(0,u.Z)(s,O.SECTION1_PROMPT_2_SHORT,"Loud/excessive snoring"),(0,u.Z)(s,O.SECTION1_PROMPT_3_SHORT,"Restless during sleep"),(0,u.Z)(s,O.SECTION1_PROMPT_4_SHORT,"Waking up tired"),(0,u.Z)(s,O.SECTION1_PROMPT_5_SHORT,"Exhaustion, fatigue (e.g. falling asleep while reading a book)"),(0,u.Z)(s,O.SECTION1_PROMPT_6_SHORT,"Frequent yawning"),(0,u.Z)(s,O.SECTION1_PROMPT_7_SHORT,"Tiredness behind the wheel"),(0,u.Z)(s,O.SECTION1_PROMPT_8_SHORT,"Problems with memory / concentration"),(0,u.Z)(s,O.SECTION1_PROMPT_9_SHORT,"Limits productivity at certain moments during the day"),(0,u.Z)(s,O.SECTION1_PROMPT_10_SHORT,"Limits participation in community, volunteer, religious or spiritual activities"),(0,u.Z)(s,O.SECTION1_PROMPT_11_SHORT,"Amount of medical care related to sleeping disturbances"),(0,u.Z)(s,O.SECTION1_PROMPT_12_SHORT,"Interaction between obstructive sleep disturbances and other medical problems"),(0,u.Z)(s,O.SECTION1_PROMPT_13_SHORT,"Fear of medical problems limits car trips to other regions or parts of the country"),(0,u.Z)(s,O.SECTION1_PROMPT_14_SHORT,"Interference with sexual relations"),(0,u.Z)(s,O.SECTION1_PROMPT_15_SHORT,"Financial burden related to the illness"),(0,u.Z)(s,O.SECTION1_PROMPT_16_SHORT,"“Frayed” nerves; “short tempered”"),(0,u.Z)(s,O.SECTION1_PROMPT_17_SHORT,"Inability to relax; always worried"),(0,u.Z)(s,O.SECTION1_PROMPT_18_SHORT,"Marital tensions, stress and tension"),(0,u.Z)(s,O.SECTION1_PROMPT_19_SHORT,"“Foul” temper"),(0,u.Z)(s,O.SECTION1_PROMPT_20_SHORT,"Inability to maintain a close relationship with partner / loved ones"),(0,u.Z)(s,O.SECTION1_PROMPT_21_SHORT,"Loss of desire for sexual relations"),(0,u.Z)(s,O.SECTION1_PROMPT_22_SHORT,"Feeling like there is no hope for the future"),(0,u.Z)(s,O.SECTION1_PROMPT_23_SHORT,"Competencies are questioned"),(0,u.Z)(s,O.SECTION1_PROMPT_24_SHORT,"Credibility is questioned"),(0,u.Z)(s,O.SECTION1_PROMPT_25_SHORT,"Changes in your work due to the illness"),(0,u.Z)(s,O.ONLY_INCLUDE_TOP_5,"Only include items that most affect your health"),s)),re=n(6808),ae=(0,_.Z)({},re.Z),le=(0,_.Z)({},re.Z),ce=n(1317),ue=(0,_.Z)({},ce.Z),_e=n(5101),Oe=(0,_.Z)({},_e.Z),Te=n(3451),de=(0,_.Z)({},Te.Z),pe={en_us:oe,es_us:ae,es_sp:le,nl_nl:ue,it_it:Oe,fr_ca:de};o["default"].use(se());var fe={lang:{locales:pe,current:"en_us"},theme:{themes:{light:{primary:"#a51417"}}}},Ee=new(se())(fe),Se=function(e){return"".concat(e,"_SHORT")},me=[{data:function(){return{k:O}},methods:{t:function(e){return this.$vuetify.lang.t("$vuetify.".concat(e))},getShortID:Se,isMild:function(e){var t=e.sum,n=e.average;return{sum:t<=25,average:n<=1,phrase:{sum:"≤ 25 ",average:"≤ 1"}}},isModerate:function(e){var t=e.sum,n=e.average;return{sum:t>25&&t<=50,average:n>1.01&&n<=2,phrase:{sum:"26 -> 50",average:"1.01 -> 2"}}},isSevere:function(e){var t=e.sum,n=e.average;return{sum:t>50,average:n>2,phrase:{sum:"> 50 ",average:"> 2"}}}}}];o["default"].use(te.Z),o["default"].mixin.apply(o["default"],(0,i.Z)(me)),o["default"].config.productionTip=!1,new o["default"]({vuetify:Ee,render:function(e){return e(ee)}}).$mount("#app-entry")}},t={};function n(s){var i=t[s];if(void 0!==i)return i.exports;var o=t[s]={id:s,loaded:!1,exports:{}};return e[s].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}n.m=e,function(){var e=[];n.O=function(t,s,i,o){if(!s){var r=1/0;for(u=0;u<e.length;u++){s=e[u][0],i=e[u][1],o=e[u][2];for(var a=!0,l=0;l<s.length;l++)(!1&o||r>=o)&&Object.keys(n.O).every((function(e){return n.O[e](s[l])}))?s.splice(l--,1):(a=!1,o<r&&(r=o));if(a){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[s,i,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/snore/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,s){var i,o,r=s[0],a=s[1],l=s[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(l)var u=l(n)}for(t&&t(s);c<r.length;c++)o=r[c],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},s=self["webpackChunksnore"]=self["webpackChunksnore"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(5177)}));s=n.O(s)})();
//# sourceMappingURL=app-legacy.afcbacf0.js.map