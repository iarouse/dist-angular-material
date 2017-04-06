webpackJsonp([5],{1e3:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function ECommerceModule(){}return ECommerceModule}()},849:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=u(189),e=u(7),o=u(1e3),r=u(40),c=u(41),s=u(942),i=u(943),a=u(944),m=u(945),d=u(875),F=u(876),p=u(877),E=u(878);u.d(n,"ECommerceModuleNgFactory",function(){return _});var h=function(l){function ECommerceModuleInjector(n){return l.call(this,n,[s.a,i.a,a.a,m.a],[])||this}return t.a(ECommerceModuleInjector,l),Object.defineProperty(ECommerceModuleInjector.prototype,"_NgLocalization_3",{get:function(){return null==this.__NgLocalization_3&&(this.__NgLocalization_3=new r.a(this.parent.get(e.b))),this.__NgLocalization_3},enumerable:!0,configurable:!0}),ECommerceModuleInjector.prototype.createInternal=function(){return this._CommonModule_0=new r.b,this._RouterModule_1=new c.q(this.parent.get(c.r,null),this.parent.get(c.j,null)),this._ECommerceModule_2=new o.a,this._ROUTES_4=[[{path:"",component:d.a,children:[{path:"",redirectTo:"/app/dashboard",pathMatch:"full"},{path:"horizontal-products",component:F.a},{path:"invoice",component:p.a},{path:"products",component:E.a}]}]],this._ECommerceModule_2},ECommerceModuleInjector.prototype.getInternal=function(l,n){return l===r.b?this._CommonModule_0:l===c.q?this._RouterModule_1:l===o.a?this._ECommerceModule_2:l===r.g?this._NgLocalization_3:l===c.u?this._ROUTES_4:n},ECommerceModuleInjector.prototype.destroyInternal=function(){},ECommerceModuleInjector}(e.A),_=new e.B(h,o.a)},865:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function ProductService(){this.product_image_path="assets/images-demo/products/"}return ProductService.prototype.getProducts=function(){return[{name:"Silver Watch",img:this.product_image_path+"watch-silver.png",sash:"sash-primary",sash_icon:"star",sash_text:"Featured"},{name:"Black Watch",img:this.product_image_path+"watch-black.png",sash:"sash-info",sash_icon:"card_giftcard",sash_text:"Gift"},{name:"Red Watch",img:this.product_image_path+"watch-edition-red.png",sash:"sash-danger",sash_icon:"flash_on",sash_text:"Popular"},{name:"Blue Watch",img:this.product_image_path+"watch-edition-blue.png",sash:"",sash_icon:"info",sash_text:"Featured"},{name:"Black Watch",img:this.product_image_path+"watch-edition-black.png",sash:"sash-danger",sash_icon:"favorite",sash_text:"Best Choice"},{name:"Sport Watch",img:this.product_image_path+"watch-sport-blue.png",sash:"sash-success",sash_icon:"new_releases",sash_text:"New"},{name:"Sport Watch",img:this.product_image_path+"watch-sport-green.png",sash:"sash-warning",sash_icon:"money_off",sash_text:"Free Shipping"},{name:"Sport Watch",img:this.product_image_path+"watch-sport-white.png",sash:"sash-white",sash_icon:"star",sash_text:"Featured"}]},ProductService}()},875:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function ECommerceComponent(){}return ECommerceComponent}()},876:function(l,n,u){"use strict";var t=u(865);u.d(n,"a",function(){return e});var e=function(){function ECommerceHorizontalProductsComponent(l){this.productService=l}return ECommerceHorizontalProductsComponent.prototype.getProducts=function(){this.products=this.productService.getProducts()},ECommerceHorizontalProductsComponent.prototype.ngOnInit=function(){this.getProducts()},ECommerceHorizontalProductsComponent.ctorParameters=function(){return[{type:t.a}]},ECommerceHorizontalProductsComponent}()},877:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function ECommerceInvoiceComponent(){}return ECommerceInvoiceComponent.prototype.ngAfterViewInit=function(){this.printContents=document.getElementById("invoice").innerHTML;document.body.innerHTML},ECommerceInvoiceComponent.prototype.printInvoice=function(){this.popupWin=window.open(),this.popupWin.document.open(),this.popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="styles/main.css" /></head><body onload="window.print()">'+this.printContents+"</html>"),this.popupWin.document.close()},ECommerceInvoiceComponent}()},878:function(l,n,u){"use strict";var t=u(865);u.d(n,"a",function(){return e});var e=function(){function ECommerceProductsComponent(l){this.productService=l}return ECommerceProductsComponent.prototype.getProducts=function(){this.products=this.productService.getProducts()},ECommerceProductsComponent.prototype.ngOnInit=function(){this.getProducts()},ECommerceProductsComponent.ctorParameters=function(){return[{type:t.a}]},ECommerceProductsComponent}()},942:function(l,n,u){"use strict";function View_ECommerceComponent_0(l){return t.D(0,[(l()(),t.E(8388608,null,null,1,"router-outlet",[],null,null,null,null,null)),t.H(73728,null,0,e.A,[e.l,t._0,t._1,[8,null]],null,null)],null,null)}function View_ECommerceComponent_Host_0(l){return t.D(0,[(l()(),t.E(0,null,null,1,"my-ecommerce",[],null,null,null,View_ECommerceComponent_0,c)),t.H(24576,null,0,o.a,[],null,null)],null,null)}var t=u(7),e=u(41),o=u(875);u.d(n,"a",function(){return s});var r=[],c=t.C({encapsulation:2,styles:r,data:{}}),s=t.J("my-ecommerce",o.a,View_ECommerceComponent_Host_0,{},{},[])},943:function(l,n,u){"use strict";function View_ECommerceHorizontalProductsComponent_1(l){return t.D(0,[(l()(),t.E(0,null,null,35,"div",[["class","item-card card__horizontal"]],null,null,null,null,null)),(l()(),t.F(null,["\n        "])),(l()(),t.E(0,null,null,6,"div",[["class","card__image"]],null,null,null,null,null)),(l()(),t.F(null,["\n            "])),(l()(),t.E(0,null,null,3,"a",[["href","javascript:;"]],null,null,null,null,null)),(l()(),t.F(null,["\n                "])),(l()(),t.E(0,null,null,0,"img",[["alt","product"]],[[8,"src",4]],null,null,null,null)),(l()(),t.F(null,["\n            "])),(l()(),t.F(null,["\n        "])),(l()(),t.F(null,["\n        "])),(l()(),t.E(0,null,null,24,"div",[["class","card__body card-white"]],null,null,null,null,null)),(l()(),t.F(null,["\n            "])),(l()(),t.E(0,null,null,7,"div",[["class","card__title"]],null,null,null,null,null)),(l()(),t.F(null,["\n                "])),(l()(),t.E(0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),t.F(null,["",""])),(l()(),t.F(null,["\n                "])),(l()(),t.E(0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),t.F(null,["Accessories"])),(l()(),t.F(null,["\n            "])),(l()(),t.F(null,["\n            "])),(l()(),t.E(0,null,null,7,"div",[["class","card__price"]],null,null,null,null,null)),(l()(),t.F(null,["\n                "])),(l()(),t.E(0,null,null,1,"span",[["class","type--strikethrough"]],null,null,null,null,null)),(l()(),t.F(null,["$699.99"])),(l()(),t.F(null,["\n                "])),(l()(),t.E(0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.F(null,["$649.99"])),(l()(),t.F(null,["\n            "])),(l()(),t.F(null,["\n            "])),(l()(),t.E(0,null,null,0,"div",[["class","divider divider-solid divider-lg"]],null,null,null,null,null)),(l()(),t.F(null,["\n            "])),(l()(),t.E(0,null,null,1,"p",[["class","card__desc"]],null,null,null,null,null)),(l()(),t.F(null,["From the way it works to the way it looks, Watch isn’t just something you wear. It’s an essential part of who you are."])),(l()(),t.F(null,["\n        "])),(l()(),t.F(null,["\n    "]))],null,function(l,n){l(n,6,0,n.context.$implicit.img),l(n,15,0,n.context.$implicit.name)})}function View_ECommerceHorizontalProductsComponent_0(l){return t.D(0,[(l()(),t.E(0,null,null,4,"section",[["class","container-fluid with-maxwidth-lg no-breadcrumbs chapter"]],null,null,null,null,null)),(l()(),t.F(null,["\n    "])),(l()(),t._35(8388608,null,null,1,null,View_ECommerceHorizontalProductsComponent_1)),t.H(401408,null,0,e.r,[t._0,t._13,t.v],{ngForOf:[0,"ngForOf"]},null),(l()(),t.F(null,["\n"]))],function(l,n){l(n,3,0,n.component.products)},null)}function View_ECommerceHorizontalProductsComponent_Host_0(l){return t.D(0,[(l()(),t.E(0,null,null,2,"my-ecommerce-horizontal-products",[],null,null,null,View_ECommerceHorizontalProductsComponent_0,s)),t._38(256,null,r.a,r.a,[]),t.H(57344,null,0,o.a,[r.a],null,null)],function(l,n){l(n,2,0)},null)}var t=u(7),e=u(40),o=u(876),r=u(865);u.d(n,"a",function(){return i});var c=[],s=t.C({encapsulation:2,styles:c,data:{}}),i=t.J("my-ecommerce-horizontal-products",o.a,View_ECommerceHorizontalProductsComponent_Host_0,{},{},[])},944:function(l,n,u){"use strict";function View_ECommerceInvoiceComponent_0(l){return t.D(0,[(l()(),t.E(0,null,null,250,"div",[["class","page-invoice"]],null,null,null,null,null)),(l()(),t.F(null,["\n\n    "])),(l()(),t.E(0,null,null,247,"div",[["class","invoice-wrapper"]],null,null,null,null,null)),(l()(),t.F(null,["\n        "])),(l()(),t.E(0,null,null,243,"section",[["class","invoice-container"],["id","invoice"]],null,null,null,null,null)),(l()(),t.F(null,["\n            \n            "])),(l()(),t.E(0,null,null,240,"div",[["class","invoice-inner"]],null,null,null,null,null)),(l()(),t.F(null,["\n                "])),(l()(),t.E(0,null,null,16,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.F(null,["\n                    "])),(l()(),t.E(0,null,null,4,"div",[["class","col-6"]],null,null,null,null,null)),(l()(),t.F(null,["\n                        "])),(l()(),t.E(0,null,null,1,"p",[["class","size-h1"]],null,null,null,null,null)),(l()(),t.F(null,["INVOICE"])),(l()(),t.F(null,["\n                    "])),(l()(),t.F(null,["\n                    "])),(l()(),t.E(0,null,null,7,"div",[["class","col-6 text-right"]],null,null,null,null,null)),(l()(),t.F(null,["\n                        Lisa Doe "])),(l()(),t.E(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.F(null,["\n                        PO Box 21177 "])),(l()(),t.E(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.F(null,["\n                        MELBOURNE VIC 8011 "])),(l()(),t.E(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.F(null,["\n                        Austria                        \n                    "])),(l()(),t.F(null,["\n                "])),(l()(),t.F(null,["\n\n                "])),(l()(),t.E(0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),t.F(null,["\n\n                "])),(l()(),t.E(0,null,null,34,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.F(null,["\n                    "])),(l()(),t.E(0,null,null,11,"div",[["class","col-6"]],null,null,null,null,null)),(l()(),t.F(null,["\n                        "])),(l()(),t.E(0,null,null,2,"p",[],null,null,null,null,null)),(l()(),t.E(0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.F(null,["Invoice To"])),(l()(),t.F(null,["\n                        Jone Doe "])),(l()(),t.E(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.F(null,["\n                        PO Box 21177 "])),(l()(),t.E(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.F(null,["\n                        MELBOURNE VIC 8011 "])),(l()(),t.E(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.F(null,["\n                        Austria\n\n                    "])),(l()(),t.F(null,["\n                    "])),(l()(),t.E(0,null,null,18,"div",[["class","col-6 text-right"]],null,null,null,null,null)),(l()(),t.F(null,["\n                        "])),(l()(),t.E(0,null,null,2,"p",[],null,null,null,null,null)),(l()(),t.E(0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.F(null,["Details:"])),(l()(),t.F(null,["\n                        "])),(l()(),t.E(0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.F(null,["Date:"])),(l()(),t.F(null,[" August 10, 2014 "])),(l()(),t.E(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.F(null,["\n                        "])),(l()(),t.E(0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.F(null,["ID:"])),(l()(),t.F(null,[" 1357995 "])),(l()(),t.E(0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.F(null,["\n                        "])),(l()(),t.E(0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.F(null,["Amount Due:"])),(l()(),t.F(null,[" $ 3040\n                    "])),(l()(),t.F(null,["            \n                "])),(l()(),t.F(null,["\n\n                "])),(l()(),t.E(0,null,null,0,"div",[["class","divider divider-lg"]],null,null,null,null,null)),(l()(),t.F(null,["\n\n                "])),(l()(),t.E(0,null,null,133,"table",[["class","table table-bordered table-striped"]],null,null,null,null,null)),(l()(),t.F(null,["\n                    "])),(l()(),t.E(0,null,null,19,"thead",[],null,null,null,null,null)),(l()(),t.F(null,["\n                        "])),(l()(),t.E(0,null,null,16,"tr",[["class","bg-color-dark"]],null,null,null,null,null)),(l()(),t.F(null,["\n                            "])),(l()(),t.E(0,null,null,1,"th",[["class","text-center"]],null,null,null,null,null)),(l()(),t.F(null,["#"])),(l()(),t.F(null,["\n                            "])),(l()(),t.E(0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.F(null,["Product"])),(l()(),t.F(null,["\n                            "])),(l()(),t.E(0,null,null,1,"th",[["class","text-center"]],null,null,null,null,null)),(l()(),t.F(null,["Unit Cost"])),(l()(),t.F(null,["\n                            "])),(l()(),t.E(0,null,null,1,"th",[["class","text-center"]],null,null,null,null,null)),(l()(),t.F(null,["Quantity"])),(l()(),t.F(null,["\n                            "])),(l()(),t.E(0,null,null,1,"th",[["class","text-center"]],null,null,null,null,null)),(l()(),t.F(null,["Total"])),(l()(),t.F(null,["\n                        "])),(l()(),t.F(null,["\n                    "])),(l()(),t.F(null,["\n                    "])),(l()(),t.E(0,null,null,109,"tbody",[],null,null,null,null,null)),(l()(),t.F(null,["\n                        "])),(l()(),t.E(0,null,null,16,"tr",[],null,null,null,null,null)),(l()(),t.F(null,["\n                            "])),(l()(),t.E(0,null,null,1,"td",[["class","text-center"]],null,null,null,null,null)),(l()(),t.F(null,["1"])),(l()(),t.F(null,["\n                            "])),(l()(),t.E(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.F(null,["Product One"])),(l()(),t.F(null,["\n                            "])),(l()(),t.E(0,null,null,1,"td",[["class","text-center"]],null,null,null,null,null)),(l()(),t.F(null,["100"])),(l()(),t.F(null,["\n                            "])),(l()(),t.E(0,null,null,1,"td",[["class","text-center"]],null,null,null,null,null)),(l()(),t.F(null,["1"])),(l()(),t.F(null,["\n                            "])),(l()(),t.E(0,null,null,1,"td",[["class","text-center"]],null,null,null,null,null)),(l()(),t.F(null,["100"])),(l()(),t.F(null,["\n                        "])),(l()(),t.F(null,["\n                        "])),(l()(),t.E(0,null,null,16,"tr",[],null,null,null,null,null)),(l()(),t.F(null,["\n                            "])),(l()(),t.E(0,null,null,1,"td",[["class","text-center"]],null,null,null,null,null)),(l()(),t.F(null,["2"])),(l()(),t.F(null,["\n                            "])),(l()(),t.E(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.F(null,["Product Two"])),(l()(),t.F(null,["\n                            "])),(l()(),t.E(0,null,null,1,"td",[["class","text-center"]],null,null,null,null,null)),(l()(),t.F(null,["550"])),(l()(),t.F(null,["\n                            "])),(l()(),t.E(0,null,null,1,"td",[["class","text-center"]],null,null,null,null,null)),(l()(),t.F(null,["2"])),(l()(),t.F(null,["\n                            "])),(l()(),t.E(0,null,null,1,"td",[["class","text-center"]],null,null,null,null,null)),(l()(),t.F(null,["1100"])),(l()(),t.F(null,["\n                        "])),(l()(),t.F(null,["\n                        "])),(l()(),t.E(0,null,null,16,"tr",[],null,null,null,null,null)),(l()(),t.F(null,["\n                            "])),(l()(),t.E(0,null,null,1,"td",[["class","text-center"]],null,null,null,null,null)),(l()(),t.F(null,["3"])),(l()(),t.F(null,["\n                            "])),(l()(),t.E(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.F(null,["Product Three"])),(l()(),t.F(null,["\n                            "])),(l()(),t.E(0,null,null,1,"td",[["class","text-center"]],null,null,null,null,null)),(l()(),t.F(null,["320"])),(l()(),t.F(null,["\n                            "])),(l()(),t.E(0,null,null,1,"td",[["class","text-center"]],null,null,null,null,null)),(l()(),t.F(null,["2"])),(l()(),t.F(null,["\n                            "])),(l()(),t.E(0,null,null,1,"td",[["class","text-center"]],null,null,null,null,null)),(l()(),t.F(null,["640"])),(l()(),t.F(null,["\n                        "])),(l()(),t.F(null,["\n                        "])),(l()(),t.E(0,null,null,16,"tr",[],null,null,null,null,null)),(l()(),t.F(null,["\n                            "])),(l()(),t.E(0,null,null,1,"td",[["class","text-center"]],null,null,null,null,null)),(l()(),t.F(null,["4"])),(l()(),t.F(null,["\n                            "])),(l()(),t.E(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.F(null,["Product Four"])),(l()(),t.F(null,["\n                            "])),(l()(),t.E(0,null,null,1,"td",[["class","text-center"]],null,null,null,null,null)),(l()(),t.F(null,["80"])),(l()(),t.F(null,["\n                            "])),(l()(),t.E(0,null,null,1,"td",[["class","text-center"]],null,null,null,null,null)),(l()(),t.F(null,["5"])),(l()(),t.F(null,["\n                            "])),(l()(),t.E(0,null,null,1,"td",[["class","text-center"]],null,null,null,null,null)),(l()(),t.F(null,["400"])),(l()(),t.F(null,["\n                        "])),(l()(),t.F(null,["\n                        "])),(l()(),t.E(0,null,null,16,"tr",[],null,null,null,null,null)),(l()(),t.F(null,["\n                            "])),(l()(),t.E(0,null,null,1,"td",[["class","text-center"]],null,null,null,null,null)),(l()(),t.F(null,["5"])),(l()(),t.F(null,["\n                            "])),(l()(),t.E(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.F(null,["Product Five"])),(l()(),t.F(null,["\n                            "])),(l()(),t.E(0,null,null,1,"td",[["class","text-center"]],null,null,null,null,null)),(l()(),t.F(null,["90"])),(l()(),t.F(null,["\n                            "])),(l()(),t.E(0,null,null,1,"td",[["class","text-center"]],null,null,null,null,null)),(l()(),t.F(null,["4"])),(l()(),t.F(null,["\n                            "])),(l()(),t.E(0,null,null,1,"td",[["class","text-center"]],null,null,null,null,null)),(l()(),t.F(null,["360"])),(l()(),t.F(null,["\n                        "])),(l()(),t.F(null,["\n                        "])),(l()(),t.E(0,null,null,16,"tr",[],null,null,null,null,null)),(l()(),t.F(null,["\n                            "])),(l()(),t.E(0,null,null,1,"td",[["class","text-center"]],null,null,null,null,null)),(l()(),t.F(null,["6"])),(l()(),t.F(null,["\n                            "])),(l()(),t.E(0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.F(null,["Product Six"])),(l()(),t.F(null,["\n                            "])),(l()(),t.E(0,null,null,1,"td",[["class","text-center"]],null,null,null,null,null)),(l()(),t.F(null,["35"])),(l()(),t.F(null,["\n                            "])),(l()(),t.E(0,null,null,1,"td",[["class","text-center"]],null,null,null,null,null)),(l()(),t.F(null,["4"])),(l()(),t.F(null,["\n                            "])),(l()(),t.E(0,null,null,1,"td",[["class","text-center"]],null,null,null,null,null)),(l()(),t.F(null,["140"])),(l()(),t.F(null,["\n                        "])),(l()(),t.F(null,["\n                    "])),(l()(),t.F(null,["\n                "])),(l()(),t.F(null,["\n\n                "])),(l()(),t.E(0,null,null,44,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.F(null,["\n                    "])),(l()(),t.E(0,null,null,22,"div",[["class","col-8"]],null,null,null,null,null)),(l()(),t.F(null,["\n                        "])),(l()(),t.E(0,null,null,1,"p",[["class","size-h3"]],null,null,null,null,null)),(l()(),t.F(null,["Thanks for your business"])),(l()(),t.F(null,["\n                        "])),(l()(),t.E(0,null,null,16,"ul",[],null,null,null,null,null)),(l()(),t.F(null,["\n                            "])),(l()(),t.E(0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.F(null,["Aeserunt tenetur cum nihil repudiandae perferendis fuga vitae corporis!"])),(l()(),t.F(null,["\n                            "])),(l()(),t.E(0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.F(null,["Laborum, necessitatibus recusandae ullam at iusto dolore."])),(l()(),t.F(null,["\n                            "])),(l()(),t.E(0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.F(null,["Voluptatum aperiam voluptates quasi!"])),(l()(),t.F(null,["\n                            "])),(l()(),t.E(0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.F(null,["Assumenda, iusto, consequuntur corporis atque culpa saepe magnam recusandae"])),(l()(),t.F(null,["\n                            "])),(l()(),t.E(0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.F(null,["Possimus odio ipsam magni sint reiciendis unde amet"])),(l()(),t.F(null,["\n                        "])),(l()(),t.F(null,["\n                    "])),(l()(),t.F(null,["\n                    "])),(l()(),t.E(0,null,null,17,"div",[["class","col-4 invoice-sum text-right"]],null,null,null,null,null)),(l()(),t.F(null,["\n                        "])),(l()(),t.E(0,null,null,14,"ul",[["class","list-unstyled"]],null,null,null,null,null)),(l()(),t.F(null,["\n                            "])),(l()(),t.E(0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.F(null,["Sub - Total amount: $ 2740"])),(l()(),t.F(null,["\n                            "])),(l()(),t.E(0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.F(null,["Discount: -----"])),(l()(),t.F(null,["\n                            "])),(l()(),t.E(0,null,null,1,"li",[],null,null,null,null,null)),(l()(),t.F(null,["Tax (12%): $300"])),(l()(),t.F(null,["\n                            "])),(l()(),t.E(0,null,null,2,"li",[],null,null,null,null,null)),(l()(),t.E(0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.F(null,["Grand Total: $ 3040"])),(l()(),t.F(null,["\n                        "])),(l()(),t.F(null,["\n                    "])),(l()(),t.F(null,["            \n                "])),(l()(),t.F(null,["\n            "])),(l()(),t.F(null,["\n        "])),(l()(),t.F(null,["\n\n        "])),(l()(),t.F(null,["\n    "])),(l()(),t.F(null,["\n"]))],null,null)}function View_ECommerceInvoiceComponent_Host_0(l){return t.D(0,[(l()(),t.E(0,null,null,1,"my-ecommerce-invoice",[],null,null,null,View_ECommerceInvoiceComponent_0,r)),t.H(2121728,null,0,e.a,[],null,null)],null,null)}var t=u(7),e=u(877);u.d(n,"a",function(){return c});var o=[],r=t.C({encapsulation:2,styles:o,data:{}}),c=t.J("my-ecommerce-invoice",e.a,View_ECommerceInvoiceComponent_Host_0,{},{},[])},945:function(l,n,u){"use strict";function View_ECommerceProductsComponent_1(l){return t.D(0,[(l()(),t.E(0,null,null,30,"div",[["class","col-xl-3 col-lg-6"]],null,null,null,null,null)),(l()(),t.F(null,["\n            "])),(l()(),t.E(0,null,null,27,"a",[["class","item-card"],["href","javascript:;"]],null,null,null,null,null)),(l()(),t.F(null,["\n                "])),(l()(),t.E(0,null,null,3,"div",[["class","card__image"]],null,null,null,null,null)),(l()(),t.F(null,["\n                    "])),(l()(),t.E(0,null,null,0,"img",[["alt","product"]],[[8,"src",4]],null,null,null,null)),(l()(),t.F(null,["\n                "])),(l()(),t.F(null,["\n                "])),(l()(),t.E(0,null,null,19,"div",[["class","card__body card-white"]],null,null,null,null,null)),(l()(),t.F(null,["\n                    "])),(l()(),t.E(0,null,null,7,"div",[["class","card__title"]],null,null,null,null,null)),(l()(),t.F(null,["\n                        "])),(l()(),t.E(0,null,null,1,"h6",[],null,null,null,null,null)),(l()(),t.F(null,["Accessories"])),(l()(),t.F(null,["\n                        "])),(l()(),t.E(0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),t.F(null,["",""])),(l()(),t.F(null,["\n                    "])),(l()(),t.F(null,["\n                    "])),(l()(),t.E(0,null,null,7,"div",[["class","card__price"]],null,null,null,null,null)),(l()(),t.F(null,["\n                        "])),(l()(),t.E(0,null,null,1,"span",[["class","type--strikethrough"]],null,null,null,null,null)),(l()(),t.F(null,["$699.99"])),(l()(),t.F(null,["\n                        "])),(l()(),t.E(0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.F(null,["$649.99"])),(l()(),t.F(null,["\n                    "])),(l()(),t.F(null,["\n                "])),(l()(),t.F(null,["\n            "])),(l()(),t.F(null,["\n        "]))],null,function(l,n){l(n,6,0,n.context.$implicit.img),l(n,17,0,n.context.$implicit.name)})}function View_ECommerceProductsComponent_0(l){return t.D(0,[(l()(),t.E(0,null,null,7,"section",[["class","container-fluid with-maxwidth no-breadcrumbs chapter"]],null,null,null,null,null)),(l()(),t.F(null,["\n    "])),(l()(),t.E(0,null,null,4,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.F(null,["\n        "])),(l()(),t._35(8388608,null,null,1,null,View_ECommerceProductsComponent_1)),t.H(401408,null,0,e.r,[t._0,t._13,t.v],{ngForOf:[0,"ngForOf"]},null),(l()(),t.F(null,["\n    "])),(l()(),t.F(null,["\n"]))],function(l,n){l(n,5,0,n.component.products)},null)}function View_ECommerceProductsComponent_Host_0(l){return t.D(0,[(l()(),t.E(0,null,null,2,"my-ecommerce-products",[],null,null,null,View_ECommerceProductsComponent_0,s)),t._38(256,null,r.a,r.a,[]),t.H(57344,null,0,o.a,[r.a],null,null)],function(l,n){l(n,2,0)},null)}var t=u(7),e=u(40),o=u(878),r=u(865);u.d(n,"a",function(){return i});var c=[],s=t.C({encapsulation:2,styles:c,data:{}}),i=t.J("my-ecommerce-products",o.a,View_ECommerceProductsComponent_Host_0,{},{},[])}});
//# sourceMappingURL=5.8dc034a941af4622c263.chunk.js.map