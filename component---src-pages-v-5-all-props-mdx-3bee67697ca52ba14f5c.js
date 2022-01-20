(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{a37k:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n("wx14"),b=n("Ff2n"),r=(n("q1tI"),n("7ljp")),i=n("7oih");n("qKvR");const l=["components"],o={},d={_frontmatter:o},c=i.a;function p(e){let{components:t}=e,n=Object(b.a)(e,l);return Object(r.b)(c,Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Prop"),Object(r.b)("th",{parentName:"tr",align:"center"},"Default"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"allowHTML")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"true")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Determines if ",Object(r.b)("inlineCode",{parentName:"strong"},"content")," strings are parsed as HTML instead of text.")," ",Object(r.b)("br",null),Object(r.b)("br",null)," Make sure you are sanitizing any user data if rendering HTML to prevent XSS attacks.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"strong"},"animateFill"))," (available as a ",Object(r.b)("a",{parentName:"td",href:"../plugins/"},"plugin"),")"),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Determines if the background fill color of the tippy should be animated.")," ",Object(r.b)("br",null),Object(r.b)("br",null)," You must import the ",Object(r.b)("inlineCode",{parentName:"td"},"dist/backdrop.css")," & ",Object(r.b)("inlineCode",{parentName:"td"},"animations/shift-away.css")," stylesheets for styling to work.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"animation")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},'"fade"')),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"The type of transition animation.")," ",Object(r.b)("br",null),Object(r.b)("br",null)," See ",Object(r.b)("a",{parentName:"td",href:"../animations/"},"Animations")," for details.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"appendTo")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"document.body")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"The element to append the tippy to.")," ",Object(r.b)("br",null),Object(r.b)("br",null)," Possible values: ",Object(r.b)("inlineCode",{parentName:"td"},'"parent"')," (the reference's parentNode), ",Object(r.b)("inlineCode",{parentName:"td"},"Element"),", ",Object(r.b)("inlineCode",{parentName:"td"},"(reference) => Element"),". ",Object(r.b)("br",null),Object(r.b)("br",null)," If ",Object(r.b)("inlineCode",{parentName:"td"},"interactive: true"),", the default behavior is ",Object(r.b)("inlineCode",{parentName:"td"},'appendTo: "parent"')," instead of ",Object(r.b)("inlineCode",{parentName:"td"},"document.body"),". ",Object(r.b)("br",null),Object(r.b)("br",null)," See ",Object(r.b)("a",{parentName:"td",href:"../accessibility/#interactivity"},"Accessibility")," for more information.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"aria")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},'"describedby"')),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"The ",Object(r.b)("inlineCode",{parentName:"strong"},"aria-*")," attribute applied to the reference element.")," This allows screen reader software to announce the tippy content once the reference element is in focus. ",Object(r.b)("br",null),Object(r.b)("br",null)," Possible values: ",Object(r.b)("inlineCode",{parentName:"td"},'"describedby"'),", ",Object(r.b)("inlineCode",{parentName:"td"},'"labelledby"'),". Use ",Object(r.b)("inlineCode",{parentName:"td"},"null")," to prevent the attribute from being added.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"arrow")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"true")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Determines if the tippy has an arrow.")," ",Object(r.b)("br",null),Object(r.b)("br",null)," Possible values: ",Object(r.b)("inlineCode",{parentName:"td"},"boolean"),", ",Object(r.b)("inlineCode",{parentName:"td"},"string")," (of SVG), or ",Object(r.b)("inlineCode",{parentName:"td"},"SVGElement"),". ",Object(r.b)("br",null),Object(r.b)("br",null)," To use the default round arrow, import ",Object(r.b)("inlineCode",{parentName:"td"},"roundArrow")," from the package (",Object(r.b)("inlineCode",{parentName:"td"},"tippy.roundArrow")," in ",Object(r.b)("inlineCode",{parentName:"td"},"iife")," version) and pass it as the value. ",Object(r.b)("br",null),Object(r.b)("br",null)," You must also import ",Object(r.b)("inlineCode",{parentName:"td"},"dist/svg-arrow.css")," when using SVG arrows for styling to work.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"boundary")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},'"scrollParent"')),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"The boundary that Popper.js' ",Object(r.b)("inlineCode",{parentName:"strong"},"preventOverflow")," modifier adheres to.")," ",Object(r.b)("br",null),Object(r.b)("br",null)," Possible values: ",Object(r.b)("inlineCode",{parentName:"td"},'"scrollParent"'),", ",Object(r.b)("inlineCode",{parentName:"td"},'"window"'),", ",Object(r.b)("inlineCode",{parentName:"td"},'"viewport"'),", or an ",Object(r.b)("inlineCode",{parentName:"td"},"HTMLElement"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"content")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},'""')),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"The content of the tippy.")," ",Object(r.b)("br",null),Object(r.b)("br",null)," Possible values: ",Object(r.b)("inlineCode",{parentName:"td"},"string"),", ",Object(r.b)("inlineCode",{parentName:"td"},"Element"),", or ",Object(r.b)("inlineCode",{parentName:"td"},"(reference) => Element"),". ",Object(r.b)("br",null),Object(r.b)("br",null)," Set ",Object(r.b)("inlineCode",{parentName:"td"},"allowHTML: false")," to render strings as text instead of HTML.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"delay")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"0")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Delay in ms once a trigger event is fired before a tippy shows or hides.")," ",Object(r.b)("br",null),Object(r.b)("br",null)," Possibles values: ",Object(r.b)("inlineCode",{parentName:"td"},"number"),", ",Object(r.b)("inlineCode",{parentName:"td"},"[number, number]")," = ","[show, hide]",". ",Object(r.b)("br",null),Object(r.b)("br",null)," Specifying a number means both the show and hide delays are the same. Use ",Object(r.b)("inlineCode",{parentName:"td"},"null")," in the array to use the default value.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"distance")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"10")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"How far in pixels the tippy element is from the reference element.")," ",Object(r.b)("br",null),Object(r.b)("br",null)," Possible values: ",Object(r.b)("inlineCode",{parentName:"td"},"number")," (px), ",Object(r.b)("inlineCode",{parentName:"td"},"string")," (with units ",Object(r.b)("inlineCode",{parentName:"td"},'"rem"')," only). ",Object(r.b)("br",null),Object(r.b)("br",null)," Only applies to a single axis and not to the parent popper element, see the ",Object(r.b)("inlineCode",{parentName:"td"},"offset")," prop.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"duration")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"[275, 250]")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Duration of the CSS transition animation in ms.")," ",Object(r.b)("br",null),Object(r.b)("br",null)," Possibles values: ",Object(r.b)("inlineCode",{parentName:"td"},"number"),", ",Object(r.b)("inlineCode",{parentName:"td"},"[number, number]")," = ","[show, hide]",". ",Object(r.b)("br",null),Object(r.b)("br",null)," Specifying a number means both the show and hide delays are the same. Use ",Object(r.b)("inlineCode",{parentName:"td"},"null")," in the array to use the default value.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"flip")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"true")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Determines if the tippy flips so that it is placed within the viewport as best it can be if there is not enough space."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"flipBehavior")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},'"flip"')),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Determines the order of flipping, i.e. which placements to prefer if a certain placement cannot be used.")," ",Object(r.b)("br",null),Object(r.b)("br",null)," Possible values: ",Object(r.b)("inlineCode",{parentName:"td"},'"flip"'),", ",Object(r.b)("inlineCode",{parentName:"td"},"Placement[]"),". ",Object(r.b)("br",null),Object(r.b)("br",null)," Use an array such as ",Object(r.b)("inlineCode",{parentName:"td"},'["bottom", "left"]')," to prefer the ",Object(r.b)("inlineCode",{parentName:"td"},'"left"')," placement if ",Object(r.b)("inlineCode",{parentName:"td"},'"bottom"')," is unavailable, instead of ",Object(r.b)("inlineCode",{parentName:"td"},'"top"'),", if using the ",Object(r.b)("inlineCode",{parentName:"td"},'"bottom"')," placement.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"flipOnUpdate")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Determines if the tippy should flip when necessary if its position updates while showing (for example, while scrolling, resize, or if the size of the tooltip changed)."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"strong"},"followCursor"))," (available as a ",Object(r.b)("a",{parentName:"td",href:"../plugins/"},"plugin"),")"),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Determines if the tippy follows the user's mouse cursor.")," ",Object(r.b)("br",null),Object(r.b)("br",null)," Use the strings ",Object(r.b)("inlineCode",{parentName:"td"},'"vertical"')," or ",Object(r.b)("inlineCode",{parentName:"td"},'"horizontal"')," to only follow the cursor on a single axis. ",Object(r.b)("br",null),Object(r.b)("br",null)," Use ",Object(r.b)("inlineCode",{parentName:"td"},'"initial"')," to place the tippy at the initial cursor position upon show, but prevent following it. ",Object(r.b)("br",null),Object(r.b)("br",null)," On touch devices, ",Object(r.b)("inlineCode",{parentName:"td"},'"initial"')," is the behavior for all truthy values.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"hideOnClick")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"true")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Determines if the tippy should hide if a mousedown event was fired outside of it (i.e. clicking on the reference element or the body of the page).")," ",Object(r.b)("br",null),Object(r.b)("br",null)," For click-triggered tippies, using ",Object(r.b)("inlineCode",{parentName:"td"},"false")," will prevent the tippy from ever hiding once it is showing. ",Object(r.b)("br",null),Object(r.b)("br",null)," To prevent clicks outside of the tippy from hiding it but still allow it to be toggled, use the string ",Object(r.b)("inlineCode",{parentName:"td"},'"toggle"'),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"ignoreAttributes")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Determines if ",Object(r.b)("inlineCode",{parentName:"strong"},"data-tippy-*")," attributes on the reference element should be ignored.")," ",Object(r.b)("br",null),Object(r.b)("br",null)," Increases performance if you enable it.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"inertia")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Determines if an inertial slingshot effect is applied to the CSS animation."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"strong"},"inlinePositioning"))," (available as a ",Object(r.b)("a",{parentName:"td",href:"../plugins/"},"plugin"),")"),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Adds enhanced support for inline element positioning (",Object(r.b)("inlineCode",{parentName:"strong"},"display: inline"),").")," ",Object(r.b)("br",null),Object(r.b)("br",null)," Automatically detects inline elements and positions the tippy correctly.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"interactive")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Determines if the tippy is interactive, i.e. it can be hovered over or clicked without hiding.")," ",Object(r.b)("br",null),Object(r.b)("br",null)," If your tippy appears cut off or invisible, ",Object(r.b)("a",{parentName:"td",href:"../faq/#my-tooltip-appears-cut-off-or-is-not-showing-at-all"},"see the FAQ")," for solutions.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"interactiveBorder")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"2")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Determines the size in pixels of the invisible border around a tippy which will prevent it from hiding if the cursor left it."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"interactiveDebounce")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"0")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Number in ms to debounce the internal ",Object(r.b)("inlineCode",{parentName:"strong"},"onMouseMove")," handler which determines when an interactive tippy should hide."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"lazy")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"true")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Determines if the positioning engine (powered by Popper.js) is created lazily. That is, it's only created when necessary upon showing the tippy for the first time.")," ",Object(r.b)("br",null),Object(r.b)("br",null)," If you need to access the ",Object(r.b)("inlineCode",{parentName:"td"},"popperInstance")," synchronously after creation, set this to ",Object(r.b)("inlineCode",{parentName:"td"},"false"),". Note that disabling this decreases performance considerably.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"maxWidth")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"350")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Determines the maximum width of the tippy.")," ",Object(r.b)("br",null),Object(r.b)("br",null)," Use a ",Object(r.b)("inlineCode",{parentName:"td"},"number")," for pixels, or a ",Object(r.b)("inlineCode",{parentName:"td"},"string")," to add units such as ",Object(r.b)("inlineCode",{parentName:"td"},"rem"),", or ",Object(r.b)("inlineCode",{parentName:"td"},'"none"'),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"multiple")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Determines if the reference element can have multiple tippies applied to it."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"offset")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"0")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Determines the offset of the tippy element.")," ",Object(r.b)("br",null)," ",Object(r.b)("br",null)," Unlike ",Object(r.b)("inlineCode",{parentName:"td"},"distance"),", it can work on both axes by using a string in the form ",Object(r.b)("inlineCode",{parentName:"td"},'"x, y"'),", such as ",Object(r.b)("inlineCode",{parentName:"td"},'"50, 20"'),". ",Object(r.b)("br",null),Object(r.b)("br",null)," Avoid using an ",Object(r.b)("inlineCode",{parentName:"td"},"offset")," along the same axis as the ",Object(r.b)("inlineCode",{parentName:"td"},"placement")," prop if using ",Object(r.b)("inlineCode",{parentName:"td"},"interactive: true"),". If using a ",Object(r.b)("inlineCode",{parentName:"td"},"number"),", there won't be any problems.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"onAfterUpdate")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"noop")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},Object(r.b)("a",{parentName:"strong",href:"/tippyjs/lifecycle-hooks/#onafterupdate"},"Lifecycle hook")," invoked after the tippy's props have been updated."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"onBeforeUpdate")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"noop")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},Object(r.b)("a",{parentName:"strong",href:"/tippyjs/lifecycle-hooks/#onbeforeupdate"},"Lifecycle hook")," invoked before the tippy's props have been updated."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"onCreate")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"noop")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},Object(r.b)("a",{parentName:"strong",href:"/tippyjs/lifecycle-hooks/#oncreate"},"Lifecycle hook")," invoked when the tippy has has been created."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"onDestroy")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"noop")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},Object(r.b)("a",{parentName:"strong",href:"/tippyjs/lifecycle-hooks/#ondestroy"},"Lifecycle hook")," invoked when the tippy has has been destroyed."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"onHidden")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"noop")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},Object(r.b)("a",{parentName:"strong",href:"/tippyjs/lifecycle-hooks/#onhidden"},"Lifecycle hook")," invoked when the tippy has fully transitioned out and is unmounted from the DOM."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"onHide")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"noop")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},Object(r.b)("a",{parentName:"strong",href:"/tippyjs/lifecycle-hooks/#onhide"},"Lifecycle hook")," invoked when the tippy begins to transition out.")," ",Object(r.b)("br",null),Object(r.b)("br",null)," You can cancel hiding by returning ",Object(r.b)("inlineCode",{parentName:"td"},"false")," from this lifecycle.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"onMount")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"noop")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},Object(r.b)("a",{parentName:"strong",href:"/tippyjs/lifecycle-hooks/#onmount"},"Lifecycle hook")," invoked when the tippy has been mounted to the DOM (called after ",Object(r.b)("inlineCode",{parentName:"strong"},"onShow"),")."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"onShow")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"noop")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},Object(r.b)("a",{parentName:"strong",href:"/tippyjs/lifecycle-hooks/#onshow"},"Lifecycle hook")," invoked when the tippy begins to transition in.")," ",Object(r.b)("br",null),Object(r.b)("br",null)," You can cancel showing by returning ",Object(r.b)("inlineCode",{parentName:"td"},"false")," from this lifecycle.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"onShown")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"noop")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},Object(r.b)("a",{parentName:"strong",href:"/tippyjs/lifecycle-hooks/#onshown"},"Lifecycle hook")," invoked when the tippy has fully transitioned in."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"onTrigger")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"noop")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},Object(r.b)("a",{parentName:"strong",href:"/tippyjs/lifecycle-hooks/#ontrigger"},"Lifecycle hook")," invoked when the tippy was triggered by a real DOM event (called before ",Object(r.b)("inlineCode",{parentName:"strong"},"onShow"),") to show the tippy."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"onUntrigger")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"noop")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},Object(r.b)("a",{parentName:"strong",href:"/tippyjs/lifecycle-hooks/#onuntrigger"},"Lifecycle hook")," invoked when the tippy was triggered by a real DOM event (called before ",Object(r.b)("inlineCode",{parentName:"strong"},"onHide"),") to hide the tippy."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"placement")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},'"top"')),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Positions the tippy relative to its reference element.")," ",Object(r.b)("br",null),Object(r.b)("br",null)," Use the suffix ",Object(r.b)("inlineCode",{parentName:"td"},"-start")," or ",Object(r.b)("inlineCode",{parentName:"td"},"-end")," to shift the tippy to the start or end of the reference element, instead of centering it. For example, ",Object(r.b)("inlineCode",{parentName:"td"},'"top-start"')," or ",Object(r.b)("inlineCode",{parentName:"td"},'"left-end"'),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"plugins")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"[]")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Specify plugins to use.")," ",Object(r.b)("br",null),Object(r.b)("br",null)," See ",Object(r.b)("a",{parentName:"td",href:"../plugins/"},"Plugins")," for details.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"popperOptions")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"{}")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Specify custom Popper.js options.")," ",Object(r.b)("br",null),Object(r.b)("br",null)," See the ",Object(r.b)("a",{parentName:"td",href:"https://popper.js.org/popper-documentation.html"},"Popper.js documentation")," for more.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"role")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},'"tooltip"')),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Specifies the ",Object(r.b)("inlineCode",{parentName:"strong"},"role")," attribute on the tippy element."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"showOnCreate")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Determines if the tippy will be shown immediately once the instance is created (respecting ",Object(r.b)("inlineCode",{parentName:"strong"},"delay"),")."))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},Object(r.b)("inlineCode",{parentName:"strong"},"sticky"))," (available as a ",Object(r.b)("a",{parentName:"td",href:"../plugins/"},"plugin"),")"),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Ensures the tippy stays stuck to its reference element if it moves around or changes size while showing.")," ",Object(r.b)("br",null),Object(r.b)("br",null)," Use ",Object(r.b)("inlineCode",{parentName:"td"},"true")," to check both ",Object(r.b)("inlineCode",{parentName:"td"},"reference")," and ",Object(r.b)("inlineCode",{parentName:"td"},"popper")," DOM rects, or use the strings ",Object(r.b)("inlineCode",{parentName:"td"},'"reference"')," or ",Object(r.b)("inlineCode",{parentName:"td"},'"popper"')," to check only one rect for improved performance (both are checked by default). ",Object(r.b)("br",null),Object(r.b)("br",null)," See the ",Object(r.b)("inlineCode",{parentName:"td"},"updateDuration")," prop to change the transition duration between position updates.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"theme")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},'""')),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Themes added as classes (each separated by a space) to the tippy element's ",Object(r.b)("inlineCode",{parentName:"strong"},"classList"),".")," ",Object(r.b)("br",null),Object(r.b)("br",null)," See ",Object(r.b)("a",{parentName:"td",href:"../themes/"},"Themes")," for details.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"touch")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"true")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Determines if the tippy displays if the user is currently using touch input.")," ",Object(r.b)("br",null),Object(r.b)("br",null)," Possible values: ",Object(r.b)("inlineCode",{parentName:"td"},"boolean"),", ",Object(r.b)("inlineCode",{parentName:"td"},'"hold"'),", ",Object(r.b)("inlineCode",{parentName:"td"},'["hold", number]'),". ",Object(r.b)("br",null),Object(r.b)("br",null)," Use ",Object(r.b)("inlineCode",{parentName:"td"},'"hold"')," to use ",Object(r.b)("inlineCode",{parentName:"td"},"touch")," listeners instead, and e.g. ",Object(r.b)("inlineCode",{parentName:"td"},'["hold", 500]'),' to simulate "long press" behavior.')),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"trigger")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},'"mouseenter focus"')),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"The events (each separated by a space) which cause a tippy to show.")," ",Object(r.b)("br",null),Object(r.b)("br",null)," Possible values: ",Object(r.b)("inlineCode",{parentName:"td"},'"mouseenter"'),", ",Object(r.b)("inlineCode",{parentName:"td"},'"focus"'),", ",Object(r.b)("inlineCode",{parentName:"td"},'"focusin"'),", ",Object(r.b)("inlineCode",{parentName:"td"},'"click"'),", ",Object(r.b)("inlineCode",{parentName:"td"},'"manual"'),". ",Object(r.b)("br",null),Object(r.b)("br",null)," Use ",Object(r.b)("inlineCode",{parentName:"td"},'"manual"')," to only trigger the tippy programmatically.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"triggerTarget")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"null")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Which element(s) the ",Object(r.b)("inlineCode",{parentName:"strong"},"trigger")," event listeners are applied to instead of the reference element.")," ",Object(r.b)("br",null),Object(r.b)("br",null)," Possible values: ",Object(r.b)("inlineCode",{parentName:"td"},"null"),", ",Object(r.b)("inlineCode",{parentName:"td"},"Element"),", or ",Object(r.b)("inlineCode",{parentName:"td"},"Element[]"),".")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"updateDuration")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"0")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"The transition duration between position updates of the popper element.")," ",Object(r.b)("br",null),Object(r.b)("br",null)," Useful for the ",Object(r.b)("inlineCode",{parentName:"td"},"sticky")," and ",Object(r.b)("inlineCode",{parentName:"td"},"flipOnUpdate")," props.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"zIndex")),Object(r.b)("td",{parentName:"tr",align:"center"},Object(r.b)("inlineCode",{parentName:"td"},"9999")),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"td"},"Determines the ",Object(r.b)("inlineCode",{parentName:"strong"},"z-index")," of the tippy."))))),Object(r.b)("style",{className:"grvsc-styles"},"\n  .grvsc-container {\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n    padding-top: 1rem;\n    padding-top: var(--grvsc-padding-top, var(--grvsc-padding-v, 1rem));\n    padding-bottom: 1rem;\n    padding-bottom: var(--grvsc-padding-bottom, var(--grvsc-padding-v, 1rem));\n    border-radius: 8px;\n    border-radius: var(--grvsc-border-radius, 8px);\n    font-feature-settings: normal;\n  }\n  \n  .grvsc-code {\n    display: inline-block;\n    min-width: 100%;\n  }\n  \n  .grvsc-line {\n    display: inline-block;\n    box-sizing: border-box;\n    width: 100%;\n    padding-left: 1.5rem;\n    padding-left: var(--grvsc-padding-left, var(--grvsc-padding-h, 1.5rem));\n    padding-right: 1.5rem;\n    padding-right: var(--grvsc-padding-right, var(--grvsc-padding-h, 1.5rem));\n  }\n  \n  .grvsc-line-highlighted {\n    background-color: var(--grvsc-line-highlighted-background-color, transparent);\n    box-shadow: inset var(--grvsc-line-highlighted-border-width, 4px) 0 0 0 var(--grvsc-line-highlighted-border-color, transparent);\n  }\n  \n"))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-v-5-all-props-mdx-3bee67697ca52ba14f5c.js.map