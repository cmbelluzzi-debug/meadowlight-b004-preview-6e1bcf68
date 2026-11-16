var cp=0,Eu=1,lp=2;var Gd=1,nh=2,fi=3,Dn=0,zt=1,Nt=2,Bi=0,Hi=1,fs=2,Tu=3,Au=4,hp=5,us=100,up=101,dp=102,fp=103,pp=104,mp=200,gp=201,bp=202,xp=203,Gc=204,Wc=205,_p=206,vp=207,yp=208,Mp=209,Sp=210,wp=211,Ep=212,Tp=213,Ap=214,Xc=0,qc=1,Yc=2,ir=3,jc=4,Kc=5,Zc=6,Jc=7,ih=0,Rp=1,Cp=2,Vi=0,Pp=1,Ip=2,Lp=3,sh=4,Dp=5,kp=6,Np=7,Ru="attached",Up="detached",Wd=300,sr=301,rr=302,Qc=303,$c=304,No=306,xi=1e3,mi=1001,ea=1002,tn=1003,rh=1004;var Zs=1005;var pn=1006,Zr=1007;var Jn=1008;var _i=1009,Xd=1010,qd=1011,ta=1012,ah=1013,ps=1014,Gn=1015,la=1016,oh=1017,ch=1018,ar=1020,Yd=35902,jd=1021,Kd=1022,Ln=1023,Zd=1024,Jd=1025,er=1026,or=1027,lh=1028,hh=1029,Qd=1030,uh=1031;var dh=1033,eo=33776,to=33777,no=33778,io=33779,el=35840,tl=35841,nl=35842,il=35843,sl=36196,rl=37492,al=37496,ol=37808,cl=37809,ll=37810,hl=37811,ul=37812,dl=37813,fl=37814,pl=37815,ml=37816,gl=37817,bl=37818,xl=37819,_l=37820,vl=37821,so=36492,yl=36494,Ml=36495,$d=36283,Sl=36284,wl=36285,El=36286,fh=2200,Fp=2201,Op=2202,cr=2300,lr=2301,hc=2302,Js=2400,Qs=2401,ro=2402,ph=2500,zp=2501,ef=0,Uo=1,ha=2,Bp=3200,Hp=3201;var mh=0,Vp=1,Fi="",it="srgb",sn="srgb-linear",Fo="linear",ft="srgb";var Is=7680;var Cu=519,Gp=512,Wp=513,Xp=514,tf=515,qp=516,Yp=517,jp=518,Kp=519,Tl=35044;var Pu="300 es",gi=2e3,ao=2001,vi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Iu=1234567,Jr=Math.PI/180,hr=180/Math.PI;function Wn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function en(i,e,t){return Math.max(e,Math.min(t,i))}function gh(i,e){return(i%e+e)%e}function Zp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Jp(i,e,t){return i!==e?(t-i)/(e-i):0}function Qr(i,e,t){return(1-t)*i+t*e}function Qp(i,e,t,n){return Qr(i,e,1-Math.exp(-t*n))}function $p(i,e=1){return e-Math.abs(gh(i,e*2)-e)}function em(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function tm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function nm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function im(i,e){return i+Math.random()*(e-i)}function sm(i){return i*(.5-Math.random())}function rm(i){i!==void 0&&(Iu=i);let e=Iu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function am(i){return i*Jr}function om(i){return i*hr}function cm(i){return(i&i-1)===0&&i!==0}function lm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function hm(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function um(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*g,c*f,o*l);break;case"YXY":i.set(c*f,o*h,c*g,o*l);break;case"ZYZ":i.set(c*g,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Vn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var $n={DEG2RAD:Jr,RAD2DEG:hr,generateUUID:Wn,clamp:en,euclideanModulo:gh,mapLinear:Zp,inverseLerp:Jp,lerp:Qr,damp:Qp,pingpong:$p,smoothstep:em,smootherstep:tm,randInt:nm,randFloat:im,randFloatSpread:sm,seededRandom:rm,degToRad:am,radToDeg:om,isPowerOfTwo:cm,ceilPowerOfTwo:lm,floorPowerOfTwo:hm,setQuaternionFromProperEuler:um,normalize:ht,denormalize:Vn},Fe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(en(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ge=class i{constructor(e,t,n,s,r,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],_=s[1],y=s[4],v=s[7],I=s[2],T=s[5],R=s[8];return r[0]=a*x+o*_+c*I,r[3]=a*m+o*y+c*T,r[6]=a*p+o*v+c*R,r[1]=l*x+h*_+u*I,r[4]=l*m+h*y+u*T,r[7]=l*p+h*v+u*R,r[2]=d*x+f*_+g*I,r[5]=d*m+f*y+g*T,r[8]=d*p+f*v+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(s*l-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=d*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(uc.makeScale(e,t)),this}rotate(e){return this.premultiply(uc.makeRotation(-e)),this}translate(e,t){return this.premultiply(uc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},uc=new Ge;function nf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function na(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function dm(){let i=na("canvas");return i.style.display="block",i}var Lu={};function jr(i){i in Lu||(Lu[i]=!0,console.warn(i))}function fm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function pm(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function mm(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var $e={enabled:!0,workingColorSpace:sn,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ft&&(i.r=bi(i.r),i.g=bi(i.g),i.b=bi(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ft&&(i.r=tr(i.r),i.g=tr(i.g),i.b=tr(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Fi?Fo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function tr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Du=[.64,.33,.3,.6,.15,.06],ku=[.2126,.7152,.0722],Nu=[.3127,.329],Uu=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fu=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);$e.define({[sn]:{primaries:Du,whitePoint:Nu,transfer:Fo,toXYZ:Uu,fromXYZ:Fu,luminanceCoefficients:ku,workingColorSpaceConfig:{unpackColorSpace:it},outputColorSpaceConfig:{drawingBufferColorSpace:it}},[it]:{primaries:Du,whitePoint:Nu,transfer:ft,toXYZ:Uu,fromXYZ:Fu,luminanceCoefficients:ku,outputColorSpaceConfig:{drawingBufferColorSpace:it}}});var Ls,Al=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ls===void 0&&(Ls=na("canvas")),Ls.width=e.width,Ls.height=e.height;let n=Ls.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ls}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=na("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=bi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(bi(t[n]/255)*255):t[n]=bi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},gm=0,oo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=Wn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(dc(s[a].image)):r.push(dc(s[a]))}else r=dc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function dc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Al.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var bm=0,Bt=class i extends vi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=mi,s=mi,r=pn,a=Jn,o=Ln,c=_i,l=i.DEFAULT_ANISOTROPY,h=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=Wn(),this.name="",this.source=new oo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xi:e.x=e.x-Math.floor(e.x);break;case mi:e.x=e.x<0?0:1;break;case ea:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xi:e.y=e.y-Math.floor(e.y);break;case mi:e.y=e.y<0?0:1;break;case ea:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=Wd;Bt.DEFAULT_ANISOTROPY=1;var tt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,v=(f+1)/2,I=(p+1)/2,T=(h+d)/4,R=(u+x)/4,D=(g+m)/4;return y>v&&y>I?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=T/n,r=R/n):v>I?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=D/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=R/r,s=D/r),this.set(n,s,r,t),this}let _=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-x)/_,this.z=(d-h)/_,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Rl=class extends vi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Bt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new oo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},yi=class extends Rl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},co=class extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Cl=class extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(u!==x||c!==d||l!==f||h!==g){let m=1-o,p=c*d+l*f+h*g+u*x,_=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let I=Math.sqrt(y),T=Math.atan2(I,p*_);m=Math.sin(m*T)/I,o=Math.sin(o*T)/I}let v=o*_;if(c=c*m+d*v,l=l*m+f*v,h=h*m+g*v,u=u*m+x*v,m===1-o){let I=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=I,l*=I,h*=I,u*=I}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-o*f,e[t+2]=l*g+h*f+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),u=o(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(en(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ou.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ou.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fc.copy(this).projectOnVector(e),this.sub(fc)}reflect(e){return this.sub(fc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(en(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},fc=new A,Ou=new yt,mn=class{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,zn):zn.fromBufferAttribute(r,a),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wa.copy(n.boundingBox)),wa.applyMatrix4(e.matrixWorld),this.union(wa)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fr),Ea.subVectors(this.max,Fr),Ds.subVectors(e.a,Fr),ks.subVectors(e.b,Fr),Ns.subVectors(e.c,Fr),Ii.subVectors(ks,Ds),Li.subVectors(Ns,ks),ss.subVectors(Ds,Ns);let t=[0,-Ii.z,Ii.y,0,-Li.z,Li.y,0,-ss.z,ss.y,Ii.z,0,-Ii.x,Li.z,0,-Li.x,ss.z,0,-ss.x,-Ii.y,Ii.x,0,-Li.y,Li.x,0,-ss.y,ss.x,0];return!pc(t,Ds,ks,Ns,Ea)||(t=[1,0,0,0,1,0,0,0,1],!pc(t,Ds,ks,Ns,Ea))?!1:(Ta.crossVectors(Ii,Li),t=[Ta.x,Ta.y,Ta.z],pc(t,Ds,ks,Ns,Ea))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},oi=[new A,new A,new A,new A,new A,new A,new A,new A],zn=new A,wa=new mn,Ds=new A,ks=new A,Ns=new A,Ii=new A,Li=new A,ss=new A,Fr=new A,Ea=new A,Ta=new A,rs=new A;function pc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){rs.fromArray(i,r);let o=s.x*Math.abs(rs.x)+s.y*Math.abs(rs.y)+s.z*Math.abs(rs.z),c=e.dot(rs),l=t.dot(rs),h=n.dot(rs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var xm=new mn,Or=new A,mc=new A,vn=class{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):xm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Or.subVectors(e,this.center);let t=Or.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Or,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Or.copy(e.center).add(mc)),this.expandByPoint(Or.copy(e.center).sub(mc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ci=new A,gc=new A,Aa=new A,Di=new A,bc=new A,Ra=new A,xc=new A,ur=class{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,t),ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){gc.copy(e).add(t).multiplyScalar(.5),Aa.copy(t).sub(e).normalize(),Di.copy(this.origin).sub(gc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Aa),o=Di.dot(this.direction),c=-Di.dot(Aa),l=Di.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(gc).addScaledVector(Aa,d),f}intersectSphere(e,t){ci.subVectors(e.center,this.origin);let n=ci.dot(this.direction),s=ci.dot(ci)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,t,n,s,r){bc.subVectors(t,e),Ra.subVectors(n,e),xc.crossVectors(bc,Ra);let a=this.direction.dot(xc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Di.subVectors(this.origin,e);let c=o*this.direction.dot(Ra.crossVectors(Di,Ra));if(c<0)return null;let l=o*this.direction.dot(bc.cross(Di));if(l<0||c+l>a)return null;let h=-o*Di.dot(xc);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ne=class i{constructor(e,t,n,s,r,a,o,c,l,h,u,d,f,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,u,d,f,g,x,m)}set(e,t,n,s,r,a,o,c,l,h,u,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Us.setFromMatrixColumn(e,0).length(),r=1/Us.setFromMatrixColumn(e,1).length(),a=1/Us.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,x=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-x*l,t[9]=-o*c,t[2]=x-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d+x*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=x+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d-x*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,x=o*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_m,e,vm)}lookAt(e,t,n){let s=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),ki.crossVectors(n,xn),ki.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),ki.crossVectors(n,xn)),ki.normalize(),Ca.crossVectors(xn,ki),s[0]=ki.x,s[4]=Ca.x,s[8]=xn.x,s[1]=ki.y,s[5]=Ca.y,s[9]=xn.y,s[2]=ki.z,s[6]=Ca.z,s[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],_=n[3],y=n[7],v=n[11],I=n[15],T=s[0],R=s[4],D=s[8],S=s[12],M=s[1],k=s[5],W=s[9],X=s[13],L=s[2],F=s[6],O=s[10],Z=s[14],H=s[3],$=s[7],ie=s[11],le=s[15];return r[0]=a*T+o*M+c*L+l*H,r[4]=a*R+o*k+c*F+l*$,r[8]=a*D+o*W+c*O+l*ie,r[12]=a*S+o*X+c*Z+l*le,r[1]=h*T+u*M+d*L+f*H,r[5]=h*R+u*k+d*F+f*$,r[9]=h*D+u*W+d*O+f*ie,r[13]=h*S+u*X+d*Z+f*le,r[2]=g*T+x*M+m*L+p*H,r[6]=g*R+x*k+m*F+p*$,r[10]=g*D+x*W+m*O+p*ie,r[14]=g*S+x*X+m*Z+p*le,r[3]=_*T+y*M+v*L+I*H,r[7]=_*R+y*k+v*F+I*$,r[11]=_*D+y*W+v*O+I*ie,r[15]=_*S+y*X+v*Z+I*le,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+r*c*u-s*l*u-r*o*d+n*l*d+s*o*f-n*c*f)+x*(+t*c*f-t*l*d+r*a*d-s*a*f+s*l*h-r*c*h)+m*(+t*l*u-t*o*f-r*a*u+n*a*f+r*o*h-n*l*h)+p*(-s*o*h-t*c*u+t*o*d+s*a*u-n*a*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],_=u*m*l-x*d*l+x*c*f-o*m*f-u*c*p+o*d*p,y=g*d*l-h*m*l-g*c*f+a*m*f+h*c*p-a*d*p,v=h*x*l-g*u*l+g*o*f-a*x*f-h*o*p+a*u*p,I=g*u*c-h*x*c-g*o*d+a*x*d+h*o*m-a*u*m,T=t*_+n*y+s*v+r*I;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/T;return e[0]=_*R,e[1]=(x*d*r-u*m*r-x*s*f+n*m*f+u*s*p-n*d*p)*R,e[2]=(o*m*r-x*c*r+x*s*l-n*m*l-o*s*p+n*c*p)*R,e[3]=(u*c*r-o*d*r-u*s*l+n*d*l+o*s*f-n*c*f)*R,e[4]=y*R,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*R,e[6]=(g*c*r-a*m*r-g*s*l+t*m*l+a*s*p-t*c*p)*R,e[7]=(a*d*r-h*c*r+h*s*l-t*d*l-a*s*f+t*c*f)*R,e[8]=v*R,e[9]=(g*u*r-h*x*r-g*n*f+t*x*f+h*n*p-t*u*p)*R,e[10]=(a*x*r-g*o*r+g*n*l-t*x*l-a*n*p+t*o*p)*R,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*f-t*o*f)*R,e[12]=I*R,e[13]=(h*x*s-g*u*s+g*n*d-t*x*d-h*n*m+t*u*m)*R,e[14]=(g*o*s-a*x*s-g*n*c+t*x*c+a*n*m-t*o*m)*R,e[15]=(a*u*s-h*o*s+h*n*c-t*u*c-a*n*d+t*o*d)*R,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,x=a*h,m=a*u,p=o*u,_=c*l,y=c*h,v=c*u,I=n.x,T=n.y,R=n.z;return s[0]=(1-(x+p))*I,s[1]=(f+v)*I,s[2]=(g-y)*I,s[3]=0,s[4]=(f-v)*T,s[5]=(1-(d+p))*T,s[6]=(m+_)*T,s[7]=0,s[8]=(g+y)*R,s[9]=(m-_)*R,s[10]=(1-(d+x))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Us.set(s[0],s[1],s[2]).length(),a=Us.set(s[4],s[5],s[6]).length(),o=Us.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Bn.copy(this);let l=1/r,h=1/a,u=1/o;return Bn.elements[0]*=l,Bn.elements[1]*=l,Bn.elements[2]*=l,Bn.elements[4]*=h,Bn.elements[5]*=h,Bn.elements[6]*=h,Bn.elements[8]*=u,Bn.elements[9]*=u,Bn.elements[10]*=u,t.setFromRotationMatrix(Bn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=gi){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),f,g;if(o===gi)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ao)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=gi){let c=this.elements,l=1/(t-e),h=1/(n-s),u=1/(a-r),d=(t+e)*l,f=(n+s)*h,g,x;if(o===gi)g=(a+r)*u,x=-2*u;else if(o===ao)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Us=new A,Bn=new Ne,_m=new A(0,0,0),vm=new A(1,1,1),ki=new A,Ca=new A,xn=new A,zu=new Ne,Bu=new yt,nn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-en(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(en(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-en(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(en(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bu.setFromEuler(this),this.setFromQuaternion(Bu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};nn.DEFAULT_ORDER="XYZ";var lo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ym=0,Hu=new A,Fs=new yt,li=new Ne,Pa=new A,zr=new A,Mm=new A,Sm=new yt,Vu=new A(1,0,0),Gu=new A(0,1,0),Wu=new A(0,0,1),Xu={type:"added"},wm={type:"removed"},Os={type:"childadded",child:null},_c={type:"childremoved",child:null},Mt=class i extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ym++}),this.uuid=Wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new A,t=new nn,n=new yt,s=new A(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ne},normalMatrix:{value:new Ge}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.multiply(Fs),this}rotateOnWorldAxis(e,t){return Fs.setFromAxisAngle(e,t),this.quaternion.premultiply(Fs),this}rotateX(e){return this.rotateOnAxis(Vu,e)}rotateY(e){return this.rotateOnAxis(Gu,e)}rotateZ(e){return this.rotateOnAxis(Wu,e)}translateOnAxis(e,t){return Hu.copy(e).applyQuaternion(this.quaternion),this.position.add(Hu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vu,e)}translateY(e){return this.translateOnAxis(Gu,e)}translateZ(e){return this.translateOnAxis(Wu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Pa.copy(e):Pa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(zr,Pa,this.up):li.lookAt(Pa,zr,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),Fs.setFromRotationMatrix(li),this.quaternion.premultiply(Fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xu),Os.child=e,this.dispatchEvent(Os),Os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wm),_c.child=e,this.dispatchEvent(_c),_c.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xu),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,e,Mm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,Sm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Mt.DEFAULT_UP=new A(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Hn=new A,hi=new A,vc=new A,ui=new A,zs=new A,Bs=new A,qu=new A,yc=new A,Mc=new A,Sc=new A,wc=new tt,Ec=new tt,Tc=new tt,Oi=class i{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Hn.subVectors(e,t),s.cross(Hn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Hn.subVectors(s,t),hi.subVectors(n,t),vc.subVectors(e,t);let a=Hn.dot(Hn),o=Hn.dot(hi),c=Hn.dot(vc),l=hi.dot(hi),h=hi.dot(vc),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,ui)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ui.x),c.addScaledVector(a,ui.y),c.addScaledVector(o,ui.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return wc.setScalar(0),Ec.setScalar(0),Tc.setScalar(0),wc.fromBufferAttribute(e,t),Ec.fromBufferAttribute(e,n),Tc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(wc,r.x),a.addScaledVector(Ec,r.y),a.addScaledVector(Tc,r.z),a}static isFrontFacing(e,t,n,s){return Hn.subVectors(n,t),hi.subVectors(e,t),Hn.cross(hi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Hn.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;zs.subVectors(s,n),Bs.subVectors(r,n),yc.subVectors(e,n);let c=zs.dot(yc),l=Bs.dot(yc);if(c<=0&&l<=0)return t.copy(n);Mc.subVectors(e,s);let h=zs.dot(Mc),u=Bs.dot(Mc);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(zs,a);Sc.subVectors(e,r);let f=zs.dot(Sc),g=Bs.dot(Sc);if(g>=0&&f<=g)return t.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(Bs,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return qu.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(qu,o);let p=1/(m+x+d);return a=x*p,o=d*p,t.copy(n).addScaledVector(zs,a).addScaledVector(Bs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},sf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},Ia={h:0,s:0,l:0};function Ac(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var we=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=it){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=$e.workingColorSpace){return this.r=e,this.g=t,this.b=n,$e.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=$e.workingColorSpace){if(e=gh(e,1),t=en(t,0,1),n=en(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ac(a,r,e+1/3),this.g=Ac(a,r,e),this.b=Ac(a,r,e-1/3)}return $e.toWorkingColorSpace(this,s),this}setStyle(e,t=it){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=it){let n=sf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}copyLinearToSRGB(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=it){return $e.fromWorkingColorSpace($t.copy(this),e),Math.round(en($t.r*255,0,255))*65536+Math.round(en($t.g*255,0,255))*256+Math.round(en($t.b*255,0,255))}getHexString(e=it){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.fromWorkingColorSpace($t.copy(this),t);let n=$t.r,s=$t.g,r=$t.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=$e.workingColorSpace){return $e.fromWorkingColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=it){$e.fromWorkingColorSpace($t.copy(this),e);let t=$t.r,n=$t.g,s=$t.b;return e!==it?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+t,Ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ni),e.getHSL(Ia);let n=Qr(Ni.h,Ia.h,t),s=Qr(Ni.s,Ia.s,t),r=Qr(Ni.l,Ia.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$t=new we;we.NAMES=sf;var Em=0,cn=class extends vi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=Wn(),this.name="",this.blending=Hi,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gc,this.blendDst=Wc,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=ir,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hi&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Gc&&(n.blendSrc=this.blendSrc),this.blendDst!==Wc&&(n.blendDst=this.blendDst),this.blendEquation!==us&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ir&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ht=class extends cn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=ih,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Lt=new A,La=new Fe,Tt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Tl,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)La.fromBufferAttribute(this,t),La.applyMatrix3(e),this.setXY(t,La.x,La.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tl&&(e.usage=this.usage),e}};var ho=class extends Tt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var uo=class extends Tt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Je=class extends Tt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Tm=0,In=new Ne,Rc=new Mt,Hs=new A,_n=new mn,Br=new mn,Ot=new A,St=class i extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=Wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nf(e)?uo:ho)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,t,n){return In.makeTranslation(e,t,n),this.applyMatrix4(In),this}scale(e,t,n){return In.makeScale(e,t,n),this.applyMatrix4(In),this}lookAt(e){return Rc.lookAt(e),Rc.updateMatrix(),this.applyMatrix4(Rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Je(n,3))}else{for(let n=0,s=t.count;n<s;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){let n=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Br.setFromBufferAttribute(o),this.morphTargetsRelative?(Ot.addVectors(_n.min,Br.min),_n.expandByPoint(Ot),Ot.addVectors(_n.max,Br.max),_n.expandByPoint(Ot)):(_n.expandByPoint(Br.min),_n.expandByPoint(Br.max))}_n.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ot.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ot));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Ot.fromBufferAttribute(o,l),c&&(Hs.fromBufferAttribute(e,l),Ot.add(Hs)),s=Math.max(s,n.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let D=0;D<n.count;D++)o[D]=new A,c[D]=new A;let l=new A,h=new A,u=new A,d=new Fe,f=new Fe,g=new Fe,x=new A,m=new A;function p(D,S,M){l.fromBufferAttribute(n,D),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,M),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let k=1/(f.x*g.y-g.x*f.y);isFinite(k)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(k),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(k),o[D].add(x),o[S].add(x),o[M].add(x),c[D].add(m),c[S].add(m),c[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let D=0,S=_.length;D<S;++D){let M=_[D],k=M.start,W=M.count;for(let X=k,L=k+W;X<L;X+=3)p(e.getX(X+0),e.getX(X+1),e.getX(X+2))}let y=new A,v=new A,I=new A,T=new A;function R(D){I.fromBufferAttribute(s,D),T.copy(I);let S=o[D];y.copy(S),y.sub(I.multiplyScalar(I.dot(S))).normalize(),v.crossVectors(T,S);let k=v.dot(c[D])<0?-1:1;a.setXYZW(D,y.x,y.y,y.z,k)}for(let D=0,S=_.length;D<S;++D){let M=_[D],k=M.start,W=M.count;for(let X=k,L=k+W;X<L;X+=3)R(e.getX(X+0)),R(e.getX(X+1)),R(e.getX(X+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new A,r=new A,a=new A,o=new A,c=new A,l=new A,h=new A,u=new A;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Tt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yu=new Ne,as=new ur,Da=new vn,ju=new A,ka=new A,Na=new A,Ua=new A,Cc=new A,Fa=new A,Ku=new A,Oa=new A,Ue=class extends Mt{constructor(e=new St,t=new Ht){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Fa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Cc.fromBufferAttribute(u,e),a?Fa.addScaledVector(Cc,h):Fa.addScaledVector(Cc.sub(t),h))}t.add(Fa)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(r),as.copy(e.ray).recast(e.near),!(Da.containsPoint(as.origin)===!1&&(as.intersectSphere(Da,ju)===null||as.origin.distanceToSquared(ju)>(e.far-e.near)**2))&&(Yu.copy(r).invert(),as.copy(e.ray).applyMatrix4(Yu),!(n.boundingBox!==null&&as.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,as)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=_,I=y;v<I;v+=3){let T=o.getX(v),R=o.getX(v+1),D=o.getX(v+2);s=za(this,p,e,n,l,h,u,T,R,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let _=o.getX(m),y=o.getX(m+1),v=o.getX(m+2);s=za(this,a,e,n,l,h,u,_,y,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=_,I=y;v<I;v+=3){let T=v,R=v+1,D=v+2;s=za(this,p,e,n,l,h,u,T,R,D),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let _=m,y=m+1,v=m+2;s=za(this,a,e,n,l,h,u,_,y,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Am(i,e,t,n,s,r,a,o){let c;if(e.side===zt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Dn,o),c===null)return null;Oa.copy(o),Oa.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Oa);return l<t.near||l>t.far?null:{distance:l,point:Oa.clone(),object:i}}function za(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,ka),i.getVertexPosition(c,Na),i.getVertexPosition(l,Ua);let h=Am(i,e,t,n,ka,Na,Ua,Ku);if(h){let u=new A;Oi.getBarycoord(Ku,ka,Na,Ua,u),s&&(h.uv=Oi.getInterpolatedAttribute(s,o,c,l,u,new Fe)),r&&(h.uv1=Oi.getInterpolatedAttribute(r,o,c,l,u,new Fe)),a&&(h.normal=Oi.getInterpolatedAttribute(a,o,c,l,u,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new A,materialIndex:0};Oi.getNormal(ka,Na,Ua,d.normal),h.face=d,h.barycoord=u}return h}var yn=class i extends St{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Je(l,3)),this.setAttribute("normal",new Je(h,3)),this.setAttribute("uv",new Je(u,2));function g(x,m,p,_,y,v,I,T,R,D,S){let M=v/R,k=I/D,W=v/2,X=I/2,L=T/2,F=R+1,O=D+1,Z=0,H=0,$=new A;for(let ie=0;ie<O;ie++){let le=ie*k-X;for(let _e=0;_e<F;_e++){let Oe=_e*M-W;$[x]=Oe*_,$[m]=le*y,$[p]=L,l.push($.x,$.y,$.z),$[x]=0,$[m]=0,$[p]=T>0?1:-1,h.push($.x,$.y,$.z),u.push(_e/R),u.push(1-ie/D),Z+=1}}for(let ie=0;ie<D;ie++)for(let le=0;le<R;le++){let _e=d+le+F*ie,Oe=d+le+F*(ie+1),Q=d+(le+1)+F*(ie+1),ne=d+(le+1)+F*ie;c.push(_e,Oe,ne),c.push(Oe,Q,ne),H+=6}o.addGroup(f,H,S),f+=H,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function dr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function on(i){let e={};for(let t=0;t<i.length;t++){let n=dr(i[t]);for(let s in n)e[s]=n[s]}return e}function Rm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function rf(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}var Cm={clone:dr,merge:on},Pm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Im=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ln=class extends cn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pm,this.fragmentShader=Im,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=dr(e.uniforms),this.uniformsGroups=Rm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},fo=class extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ui=new A,Zu=new Fe,Ju=new Fe,kt=class extends fo{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=hr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hr*2*Math.atan(Math.tan(Jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,t){return this.getViewBounds(e,Zu,Ju),t.subVectors(Ju,Zu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Jr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Vs=-90,Gs=1,Pl=class extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new kt(Vs,Gs,e,t);s.layers=this.layers,this.add(s);let r=new kt(Vs,Gs,e,t);r.layers=this.layers,this.add(r);let a=new kt(Vs,Gs,e,t);a.layers=this.layers,this.add(a);let o=new kt(Vs,Gs,e,t);o.layers=this.layers,this.add(o);let c=new kt(Vs,Gs,e,t);c.layers=this.layers,this.add(c);let l=new kt(Vs,Gs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===gi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ao)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},po=class extends Bt{constructor(e,t,n,s,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:sr,super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Il=class extends yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new po(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new yn(5,5,5),r=new ln({name:"CubemapFromEquirect",uniforms:dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zt,blending:Bi});r.uniforms.tEquirect.value=t;let a=new Ue(s,r),o=t.minFilter;return t.minFilter===Jn&&(t.minFilter=pn),new Pl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Pc=new A,Lm=new A,Dm=new Ge,pi=class{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Pc.subVectors(n,t).cross(Lm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Pc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Dm.getNormalMatrix(e),s=this.coplanarPoint(Pc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},os=new vn,Ba=new A,ia=class{constructor(e=new pi,t=new pi,n=new pi,s=new pi,r=new pi,a=new pi){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gi){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],x=s[10],m=s[11],p=s[12],_=s[13],y=s[14],v=s[15];if(n[0].setComponents(c-r,d-l,m-f,v-p).normalize(),n[1].setComponents(c+r,d+l,m+f,v+p).normalize(),n[2].setComponents(c+a,d+h,m+g,v+_).normalize(),n[3].setComponents(c-a,d-h,m-g,v-_).normalize(),n[4].setComponents(c-o,d-u,m-x,v-y).normalize(),t===gi)n[5].setComponents(c+o,d+u,m+x,v+y).normalize();else if(t===ao)n[5].setComponents(o,u,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(e){return os.center.set(0,0,0),os.radius=.7071067811865476,os.applyMatrix4(e.matrixWorld),this.intersectsSphere(os)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ba.x=s.normal.x>0?e.max.x:e.min.x,Ba.y=s.normal.y>0?e.max.y:e.min.y,Ba.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ba)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function af(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function km(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){let h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Mn=class i extends St{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let _=p*d-a;for(let y=0;y<l;y++){let v=y*u-r;g.push(v,-_,0),x.push(0,0,1),m.push(y/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<o;_++){let y=_+l*p,v=_+l*(p+1),I=_+1+l*(p+1),T=_+1+l*p;f.push(y,v,T),f.push(v,I,T)}this.setIndex(f),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Nm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Um=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Fm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Om=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Hm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Wm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ym=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Km=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Zm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Jm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$m=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ng=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ig=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,sg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ag=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,og=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ug="gl_FragColor = linearToOutputTexel( gl_FragColor );",dg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,pg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,mg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_g=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Sg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Eg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ag=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Rg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ig=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Dg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ng=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ug=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Og=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Wg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Jg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$g=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,e0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,i0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,s0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,r0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,a0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,o0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,c0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,l0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,h0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,u0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,d0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,f0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,p0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,m0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,g0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,b0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,x0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,v0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,y0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,M0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,S0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,w0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,E0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,T0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,A0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,R0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,C0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,P0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,I0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,L0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,D0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,k0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,N0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,H0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,V0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,G0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,X0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Y0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,j0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,K0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,tb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,nb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ib=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ab=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ob=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ub=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,db=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:Nm,alphahash_pars_fragment:Um,alphamap_fragment:Fm,alphamap_pars_fragment:Om,alphatest_fragment:zm,alphatest_pars_fragment:Bm,aomap_fragment:Hm,aomap_pars_fragment:Vm,batching_pars_vertex:Gm,batching_vertex:Wm,begin_vertex:Xm,beginnormal_vertex:qm,bsdfs:Ym,iridescence_fragment:jm,bumpmap_pars_fragment:Km,clipping_planes_fragment:Zm,clipping_planes_pars_fragment:Jm,clipping_planes_pars_vertex:Qm,clipping_planes_vertex:$m,color_fragment:eg,color_pars_fragment:tg,color_pars_vertex:ng,color_vertex:ig,common:sg,cube_uv_reflection_fragment:rg,defaultnormal_vertex:ag,displacementmap_pars_vertex:og,displacementmap_vertex:cg,emissivemap_fragment:lg,emissivemap_pars_fragment:hg,colorspace_fragment:ug,colorspace_pars_fragment:dg,envmap_fragment:fg,envmap_common_pars_fragment:pg,envmap_pars_fragment:mg,envmap_pars_vertex:gg,envmap_physical_pars_fragment:Ag,envmap_vertex:bg,fog_vertex:xg,fog_pars_vertex:_g,fog_fragment:vg,fog_pars_fragment:yg,gradientmap_pars_fragment:Mg,lightmap_pars_fragment:Sg,lights_lambert_fragment:wg,lights_lambert_pars_fragment:Eg,lights_pars_begin:Tg,lights_toon_fragment:Rg,lights_toon_pars_fragment:Cg,lights_phong_fragment:Pg,lights_phong_pars_fragment:Ig,lights_physical_fragment:Lg,lights_physical_pars_fragment:Dg,lights_fragment_begin:kg,lights_fragment_maps:Ng,lights_fragment_end:Ug,logdepthbuf_fragment:Fg,logdepthbuf_pars_fragment:Og,logdepthbuf_pars_vertex:zg,logdepthbuf_vertex:Bg,map_fragment:Hg,map_pars_fragment:Vg,map_particle_fragment:Gg,map_particle_pars_fragment:Wg,metalnessmap_fragment:Xg,metalnessmap_pars_fragment:qg,morphinstance_vertex:Yg,morphcolor_vertex:jg,morphnormal_vertex:Kg,morphtarget_pars_vertex:Zg,morphtarget_vertex:Jg,normal_fragment_begin:Qg,normal_fragment_maps:$g,normal_pars_fragment:e0,normal_pars_vertex:t0,normal_vertex:n0,normalmap_pars_fragment:i0,clearcoat_normal_fragment_begin:s0,clearcoat_normal_fragment_maps:r0,clearcoat_pars_fragment:a0,iridescence_pars_fragment:o0,opaque_fragment:c0,packing:l0,premultiplied_alpha_fragment:h0,project_vertex:u0,dithering_fragment:d0,dithering_pars_fragment:f0,roughnessmap_fragment:p0,roughnessmap_pars_fragment:m0,shadowmap_pars_fragment:g0,shadowmap_pars_vertex:b0,shadowmap_vertex:x0,shadowmask_pars_fragment:_0,skinbase_vertex:v0,skinning_pars_vertex:y0,skinning_vertex:M0,skinnormal_vertex:S0,specularmap_fragment:w0,specularmap_pars_fragment:E0,tonemapping_fragment:T0,tonemapping_pars_fragment:A0,transmission_fragment:R0,transmission_pars_fragment:C0,uv_pars_fragment:P0,uv_pars_vertex:I0,uv_vertex:L0,worldpos_vertex:D0,background_vert:k0,background_frag:N0,backgroundCube_vert:U0,backgroundCube_frag:F0,cube_vert:O0,cube_frag:z0,depth_vert:B0,depth_frag:H0,distanceRGBA_vert:V0,distanceRGBA_frag:G0,equirect_vert:W0,equirect_frag:X0,linedashed_vert:q0,linedashed_frag:Y0,meshbasic_vert:j0,meshbasic_frag:K0,meshlambert_vert:Z0,meshlambert_frag:J0,meshmatcap_vert:Q0,meshmatcap_frag:$0,meshnormal_vert:eb,meshnormal_frag:tb,meshphong_vert:nb,meshphong_frag:ib,meshphysical_vert:sb,meshphysical_frag:rb,meshtoon_vert:ab,meshtoon_frag:ob,points_vert:cb,points_frag:lb,shadow_vert:hb,shadow_frag:ub,sprite_vert:db,sprite_frag:fb},ue={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Zn={basic:{uniforms:on([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:on([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new we(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:on([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:on([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:on([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new we(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:on([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:on([ue.points,ue.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:on([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:on([ue.common,ue.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:on([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:on([ue.sprite,ue.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:on([ue.common,ue.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:on([ue.lights,ue.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Zn.physical={uniforms:on([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};var Ha={r:0,b:0,g:0},cs=new nn,pb=new Ne;function mb(i,e,t,n,s,r,a){let o=new we(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?t:e).get(y)),y}function x(_){let y=!1,v=g(_);v===null?p(o,c):v&&v.isColor&&(p(v,1),y=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(_,y){let v=g(y);v&&(v.isCubeTexture||v.mapping===No)?(h===void 0&&(h=new Ue(new yn(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:dr(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),cs.copy(y.backgroundRotation),cs.x*=-1,cs.y*=-1,cs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(pb.makeRotationFromEuler(cs)),h.material.toneMapped=$e.getTransfer(v.colorSpace)!==ft,(u!==v||d!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ue(new Mn(2,2),new ln({name:"BackgroundMaterial",uniforms:dr(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=$e.getTransfer(v.colorSpace)!==ft,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,y){_.getRGB(Ha,rf(i)),n.buffers.color.setClear(Ha.r,Ha.g,Ha.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(_,y=1){o.set(_),c=y,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,p(o,c)},render:x,addToRenderList:m}}function gb(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(M,k,W,X,L){let F=!1,O=u(X,W,k);r!==O&&(r=O,l(r.object)),F=f(M,X,W,L),F&&g(M,X,W,L),L!==null&&e.update(L,i.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,v(M,k,W,X),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,k,W){let X=W.wireframe===!0,L=n[M.id];L===void 0&&(L={},n[M.id]=L);let F=L[k.id];F===void 0&&(F={},L[k.id]=F);let O=F[X];return O===void 0&&(O=d(c()),F[X]=O),O}function d(M){let k=[],W=[],X=[];for(let L=0;L<t;L++)k[L]=0,W[L]=0,X[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:W,attributeDivisors:X,object:M,attributes:{},index:null}}function f(M,k,W,X){let L=r.attributes,F=k.attributes,O=0,Z=W.getAttributes();for(let H in Z)if(Z[H].location>=0){let ie=L[H],le=F[H];if(le===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(le=M.instanceColor)),ie===void 0||ie.attribute!==le||le&&ie.data!==le.data)return!0;O++}return r.attributesNum!==O||r.index!==X}function g(M,k,W,X){let L={},F=k.attributes,O=0,Z=W.getAttributes();for(let H in Z)if(Z[H].location>=0){let ie=F[H];ie===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ie=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ie=M.instanceColor));let le={};le.attribute=ie,ie&&ie.data&&(le.data=ie.data),L[H]=le,O++}r.attributes=L,r.attributesNum=O,r.index=X}function x(){let M=r.newAttributes;for(let k=0,W=M.length;k<W;k++)M[k]=0}function m(M){p(M,0)}function p(M,k){let W=r.newAttributes,X=r.enabledAttributes,L=r.attributeDivisors;W[M]=1,X[M]===0&&(i.enableVertexAttribArray(M),X[M]=1),L[M]!==k&&(i.vertexAttribDivisor(M,k),L[M]=k)}function _(){let M=r.newAttributes,k=r.enabledAttributes;for(let W=0,X=k.length;W<X;W++)k[W]!==M[W]&&(i.disableVertexAttribArray(W),k[W]=0)}function y(M,k,W,X,L,F,O){O===!0?i.vertexAttribIPointer(M,k,W,L,F):i.vertexAttribPointer(M,k,W,X,L,F)}function v(M,k,W,X){x();let L=X.attributes,F=W.getAttributes(),O=k.defaultAttributeValues;for(let Z in F){let H=F[Z];if(H.location>=0){let $=L[Z];if($===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&($=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&($=M.instanceColor)),$!==void 0){let ie=$.normalized,le=$.itemSize,_e=e.get($);if(_e===void 0)continue;let Oe=_e.buffer,Q=_e.type,ne=_e.bytesPerElement,be=Q===i.INT||Q===i.UNSIGNED_INT||$.gpuType===ah;if($.isInterleavedBufferAttribute){let ce=$.data,Se=ce.stride,Ee=$.offset;if(ce.isInstancedInterleavedBuffer){for(let We=0;We<H.locationSize;We++)p(H.location+We,ce.meshPerAttribute);M.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let We=0;We<H.locationSize;We++)m(H.location+We);i.bindBuffer(i.ARRAY_BUFFER,Oe);for(let We=0;We<H.locationSize;We++)y(H.location+We,le/H.locationSize,Q,ie,Se*ne,(Ee+le/H.locationSize*We)*ne,be)}else{if($.isInstancedBufferAttribute){for(let ce=0;ce<H.locationSize;ce++)p(H.location+ce,$.meshPerAttribute);M.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ce=0;ce<H.locationSize;ce++)m(H.location+ce);i.bindBuffer(i.ARRAY_BUFFER,Oe);for(let ce=0;ce<H.locationSize;ce++)y(H.location+ce,le/H.locationSize,Q,ie,le*ne,le/H.locationSize*ce*ne,be)}}else if(O!==void 0){let ie=O[Z];if(ie!==void 0)switch(ie.length){case 2:i.vertexAttrib2fv(H.location,ie);break;case 3:i.vertexAttrib3fv(H.location,ie);break;case 4:i.vertexAttrib4fv(H.location,ie);break;default:i.vertexAttrib1fv(H.location,ie)}}}}_()}function I(){D();for(let M in n){let k=n[M];for(let W in k){let X=k[W];for(let L in X)h(X[L].object),delete X[L];delete k[W]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;let k=n[M.id];for(let W in k){let X=k[W];for(let L in X)h(X[L].object),delete X[L];delete k[W]}delete n[M.id]}function R(M){for(let k in n){let W=n[k];if(W[M.id]===void 0)continue;let X=W[M.id];for(let L in X)h(X[L].object),delete X[L];delete W[M.id]}}function D(){S(),a=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function bb(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function xb(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Ln&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let D=R===la&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==_i&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Gn&&!D)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:I,maxSamples:T}}function _b(i){let e=this,t=null,n=0,s=!1,r=!1,a=new pi,o=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let _=r?0:n,y=_*4,v=p.clippingState||null;c.value=v,v=h(g,d,y,f);for(let I=0;I!==y;++I)v[I]=t[I];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=f+x*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=f;y!==x;++y,v+=4)a.copy(u[y]).applyMatrix4(_,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function vb(i){let e=new WeakMap;function t(a,o){return o===Qc?a.mapping=sr:o===$c&&(a.mapping=rr),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Qc||o===$c)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new Il(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var fr=class extends fo{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},$s=4,Qu=[.125,.215,.35,.446,.526,.582],ds=20,Ic=new fr,$u=new we,Lc=null,Dc=0,kc=0,Nc=!1,hs=(1+Math.sqrt(5))/2,Ws=1/hs,ed=[new A(-hs,Ws,0),new A(hs,Ws,0),new A(-Ws,0,hs),new A(Ws,0,hs),new A(0,hs,-Ws),new A(0,hs,Ws),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],mo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Lc=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),kc=this._renderer.getActiveMipmapLevel(),Nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=id(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Lc,Dc,kc),this._renderer.xr.enabled=Nc,e.scissorTest=!1,Va(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===sr||e.mapping===rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Lc=this._renderer.getRenderTarget(),Dc=this._renderer.getActiveCubeFace(),kc=this._renderer.getActiveMipmapLevel(),Nc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:la,format:Ln,colorSpace:sn,depthBuffer:!1},s=td(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=td(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yb(r)),this._blurMaterial=Mb(r,e,t)}return s}_compileMaterial(e){let t=new Ue(this._lodPlanes[0],e);this._renderer.compile(t,Ic)}_sceneToCubeUV(e,t,n,s){let o=new kt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor($u),h.toneMapping=Vi,h.autoClear=!1;let f=new Ht({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1}),g=new Ue(new yn,f),x=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy($u),x=!0);for(let p=0;p<6;p++){let _=p%3;_===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):_===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));let y=this._cubeSize;Va(s,_*y,p>2?y:0,y,y),h.setRenderTarget(s),x&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===sr||e.mapping===rr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=id()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ue(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Va(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Ic)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ed[(s-r-1)%ed.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ue(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ds-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):ds;m>ds&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ds}`);let p=[],_=0;for(let R=0;R<ds;++R){let D=R/x,S=Math.exp(-D*D/2);p.push(S),R===0?_+=S:R<m&&(_+=2*S)}for(let R=0;R<p.length;R++)p[R]=p[R]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;let v=this._sizeLods[s],I=3*v*(s>y-$s?s-y+$s:0),T=4*(this._cubeSize-v);Va(t,I,T,3*v,2*v),c.setRenderTarget(t),c.render(u,Ic)}};function yb(i){let e=[],t=[],n=[],s=i,r=i-$s+1+Qu.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>i-$s?c=Qu[a-i+$s-1]:a===0&&(c=0),n.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,_=new Float32Array(x*g*f),y=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let T=0;T<f;T++){let R=T%3*2/3-1,D=T>2?0:-1,S=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];_.set(S,x*g*T),y.set(d,m*g*T);let M=[T,T,T,T,T,T];v.set(M,p*g*T)}let I=new St;I.setAttribute("position",new Tt(_,x)),I.setAttribute("uv",new Tt(y,m)),I.setAttribute("faceIndex",new Tt(v,p)),e.push(I),s>$s&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function td(i,e,t){let n=new yi(i,e,t);return n.texture.mapping=No,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Va(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Mb(i,e,t){let n=new Float32Array(ds),s=new A(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:ds,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function nd(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function id(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function bh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Sb(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let c=o.mapping,l=c===Qc||c===$c,h=c===sr||c===rr;if(l||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new mo(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return l&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new mo(i)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function wb(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&jr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Eb(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)e.update(d[g],i.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let x=f[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],i.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(f!==null){let _=f.array;x=f.version;for(let y=0,v=_.length;y<v;y+=3){let I=_[y+0],T=_[y+1],R=_[y+2];d.push(I,T,T,R,R,I)}}else if(g!==void 0){let _=g.array;x=g.version;for(let y=0,v=_.length/3-1;y<v;y+=3){let I=y+0,T=y+1,R=y+2;d.push(I,T,T,R,R,I)}}else return;let m=new(nf(d)?uo:ho)(d,1);m.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Tb(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,g);let p=0;for(let _=0;_<g;_++)p+=f[_]*x[_];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ab(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Rb(i,e,t){let n=new WeakMap,s=new tt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let S=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],_=o.morphAttributes.color||[],y=0;f===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let v=o.attributes.position.count*y,I=1;v>e.maxTextureSize&&(I=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*I*4*u),R=new co(T,v,I,u);R.type=Gn,R.needsUpdate=!0;let D=y*4;for(let M=0;M<u;M++){let k=m[M],W=p[M],X=_[M],L=v*I*4*M;for(let F=0;F<k.count;F++){let O=F*D;f===!0&&(s.fromBufferAttribute(k,F),T[L+O+0]=s.x,T[L+O+1]=s.y,T[L+O+2]=s.z,T[L+O+3]=0),g===!0&&(s.fromBufferAttribute(W,F),T[L+O+4]=s.x,T[L+O+5]=s.y,T[L+O+6]=s.z,T[L+O+7]=0),x===!0&&(s.fromBufferAttribute(X,F),T[L+O+8]=s.x,T[L+O+9]=s.y,T[L+O+10]=s.z,T[L+O+11]=X.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new Fe(v,I)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Cb(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var go=class extends Bt{constructor(e,t,n,s,r,a,o,c,l,h=er){if(h!==er&&h!==or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===er&&(n=ps),n===void 0&&h===or&&(n=ar),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:tn,this.minFilter=c!==void 0?c:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},of=new Bt,sd=new go(1,1),cf=new co,lf=new Cl,hf=new po,rd=[],ad=[],od=new Float32Array(16),cd=new Float32Array(9),ld=new Float32Array(4);function Tr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=rd[s];if(r===void 0&&(r=new Float32Array(s),rd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ft(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Oo(i,e){let t=ad[e];t===void 0&&(t=new Int32Array(e),ad[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Pb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ib(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2fv(this.addr,e),Ft(t,e)}}function Lb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;i.uniform3fv(this.addr,e),Ft(t,e)}}function Db(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4fv(this.addr,e),Ft(t,e)}}function kb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;ld.set(n),i.uniformMatrix2fv(this.addr,!1,ld),Ft(t,n)}}function Nb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;cd.set(n),i.uniformMatrix3fv(this.addr,!1,cd),Ft(t,n)}}function Ub(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ft(t,e)}else{if(Ut(t,n))return;od.set(n),i.uniformMatrix4fv(this.addr,!1,od),Ft(t,n)}}function Fb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ob(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2iv(this.addr,e),Ft(t,e)}}function zb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3iv(this.addr,e),Ft(t,e)}}function Bb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4iv(this.addr,e),Ft(t,e)}}function Hb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Vb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2uiv(this.addr,e),Ft(t,e)}}function Gb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3uiv(this.addr,e),Ft(t,e)}}function Wb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4uiv(this.addr,e),Ft(t,e)}}function Xb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(sd.compareFunction=tf,r=sd):r=of,t.setTexture2D(e||r,s)}function qb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||lf,s)}function Yb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||hf,s)}function jb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||cf,s)}function Kb(i){switch(i){case 5126:return Pb;case 35664:return Ib;case 35665:return Lb;case 35666:return Db;case 35674:return kb;case 35675:return Nb;case 35676:return Ub;case 5124:case 35670:return Fb;case 35667:case 35671:return Ob;case 35668:case 35672:return zb;case 35669:case 35673:return Bb;case 5125:return Hb;case 36294:return Vb;case 36295:return Gb;case 36296:return Wb;case 35678:case 36198:case 36298:case 36306:case 35682:return Xb;case 35679:case 36299:case 36307:return qb;case 35680:case 36300:case 36308:case 36293:return Yb;case 36289:case 36303:case 36311:case 36292:return jb}}function Zb(i,e){i.uniform1fv(this.addr,e)}function Jb(i,e){let t=Tr(e,this.size,2);i.uniform2fv(this.addr,t)}function Qb(i,e){let t=Tr(e,this.size,3);i.uniform3fv(this.addr,t)}function $b(i,e){let t=Tr(e,this.size,4);i.uniform4fv(this.addr,t)}function ex(i,e){let t=Tr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function tx(i,e){let t=Tr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function nx(i,e){let t=Tr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ix(i,e){i.uniform1iv(this.addr,e)}function sx(i,e){i.uniform2iv(this.addr,e)}function rx(i,e){i.uniform3iv(this.addr,e)}function ax(i,e){i.uniform4iv(this.addr,e)}function ox(i,e){i.uniform1uiv(this.addr,e)}function cx(i,e){i.uniform2uiv(this.addr,e)}function lx(i,e){i.uniform3uiv(this.addr,e)}function hx(i,e){i.uniform4uiv(this.addr,e)}function ux(i,e,t){let n=this.cache,s=e.length,r=Oo(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||of,r[a])}function dx(i,e,t){let n=this.cache,s=e.length,r=Oo(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||lf,r[a])}function fx(i,e,t){let n=this.cache,s=e.length,r=Oo(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||hf,r[a])}function px(i,e,t){let n=this.cache,s=e.length,r=Oo(t,s);Ut(n,r)||(i.uniform1iv(this.addr,r),Ft(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||cf,r[a])}function mx(i){switch(i){case 5126:return Zb;case 35664:return Jb;case 35665:return Qb;case 35666:return $b;case 35674:return ex;case 35675:return tx;case 35676:return nx;case 5124:case 35670:return ix;case 35667:case 35671:return sx;case 35668:case 35672:return rx;case 35669:case 35673:return ax;case 5125:return ox;case 36294:return cx;case 36295:return lx;case 36296:return hx;case 35678:case 36198:case 36298:case 36306:case 35682:return ux;case 35679:case 36299:case 36307:return dx;case 35680:case 36300:case 36308:case 36293:return fx;case 36289:case 36303:case 36311:case 36292:return px}}var Ll=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Kb(t.type)}},Dl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=mx(t.type)}},kl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Uc=/(\w+)(\])?(\[|\.)?/g;function hd(i,e){i.seq.push(e),i.map[e.id]=e}function gx(i,e,t){let n=i.name,s=n.length;for(Uc.lastIndex=0;;){let r=Uc.exec(n),a=Uc.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){hd(t,l===void 0?new Ll(o,i,e):new Dl(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new kl(o),hd(t,u)),t=u}}}var nr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);gx(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function ud(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var bx=37297,xx=0;function _x(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var dd=new Ge;function vx(i){$e._getMatrix(dd,$e.workingColorSpace,i);let e=`mat3( ${dd.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(i)){case Fo:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function fd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+_x(i.getShaderSource(e),a)}else return s}function yx(i,e){let t=vx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Mx(i,e){let t;switch(e){case Pp:t="Linear";break;case Ip:t="Reinhard";break;case Lp:t="Cineon";break;case sh:t="ACESFilmic";break;case kp:t="AgX";break;case Np:t="Neutral";break;case Dp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ga=new A;function Sx(){$e.getLuminanceCoefficients(Ga);let i=Ga.x.toFixed(4),e=Ga.y.toFixed(4),t=Ga.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kr).join(`
`)}function Ex(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Tx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Kr(i){return i!==""}function pd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function md(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ax=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nl(i){return i.replace(Ax,Cx)}var Rx=new Map;function Cx(i,e){let t=je[e];if(t===void 0){let n=Rx.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Nl(t)}var Px=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gd(i){return i.replace(Px,Ix)}function Ix(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function bd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Lx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Gd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===nh?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===fi&&(e="SHADOWMAP_TYPE_VSM"),e}function Dx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case sr:case rr:e="ENVMAP_TYPE_CUBE";break;case No:e="ENVMAP_TYPE_CUBE_UV";break}return e}function kx(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===rr&&(e="ENVMAP_MODE_REFRACTION"),e}function Nx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ih:e="ENVMAP_BLENDING_MULTIPLY";break;case Rp:e="ENVMAP_BLENDING_MIX";break;case Cp:e="ENVMAP_BLENDING_ADD";break}return e}function Ux(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Fx(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=Lx(t),l=Dx(t),h=kx(t),u=Nx(t),d=Ux(t),f=wx(t),g=Ex(r),x=s.createProgram(),m,p,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Kr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Kr).join(`
`),p.length>0&&(p+=`
`)):(m=[bd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kr).join(`
`),p=[bd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vi?"#define TONE_MAPPING":"",t.toneMapping!==Vi?je.tonemapping_pars_fragment:"",t.toneMapping!==Vi?Mx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,yx("linearToOutputTexel",t.outputColorSpace),Sx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Kr).join(`
`)),a=Nl(a),a=pd(a,t),a=md(a,t),o=Nl(o),o=pd(o,t),o=md(o,t),a=gd(a),o=gd(o),t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=_+m+a,v=_+p+o,I=ud(s,s.VERTEX_SHADER,y),T=ud(s,s.FRAGMENT_SHADER,v);s.attachShader(x,I),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function R(k){if(i.debug.checkShaderErrors){let W=s.getProgramInfoLog(x).trim(),X=s.getShaderInfoLog(I).trim(),L=s.getShaderInfoLog(T).trim(),F=!0,O=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,I,T);else{let Z=fd(s,I,"vertex"),H=fd(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+W+`
`+Z+`
`+H)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(X===""||L==="")&&(O=!1);O&&(k.diagnostics={runnable:F,programLog:W,vertexShader:{log:X,prefix:m},fragmentShader:{log:L,prefix:p}})}s.deleteShader(I),s.deleteShader(T),D=new nr(s,x),S=Tx(s,x)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,bx)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=xx++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=T,this}var Ox=0,Ul=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Fl(e),t.set(e,n)),n}},Fl=class{constructor(e){this.id=Ox++,this.code=e,this.usedTimes=0}};function zx(i,e,t,n,s,r,a){let o=new lo,c=new Ul,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,M,k,W,X){let L=W.fog,F=X.geometry,O=S.isMeshStandardMaterial?W.environment:null,Z=(S.isMeshStandardMaterial?t:e).get(S.envMap||O),H=Z&&Z.mapping===No?Z.image.height:null,$=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let ie=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,le=ie!==void 0?ie.length:0,_e=0;F.morphAttributes.position!==void 0&&(_e=1),F.morphAttributes.normal!==void 0&&(_e=2),F.morphAttributes.color!==void 0&&(_e=3);let Oe,Q,ne,be;if($){let lt=Zn[$];Oe=lt.vertexShader,Q=lt.fragmentShader}else Oe=S.vertexShader,Q=S.fragmentShader,c.update(S),ne=c.getVertexShaderID(S),be=c.getFragmentShaderID(S);let ce=i.getRenderTarget(),Se=i.state.buffers.depth.getReversed(),Ee=X.isInstancedMesh===!0,We=X.isBatchedMesh===!0,ut=!!S.map,Ke=!!S.matcap,Et=!!Z,U=!!S.aoMap,Zt=!!S.lightMap,Ze=!!S.bumpMap,Xe=!!S.normalMap,Le=!!S.displacementMap,dt=!!S.emissiveMap,De=!!S.metalnessMap,P=!!S.roughnessMap,b=S.anisotropy>0,C=S.clearcoat>0,V=S.dispersion>0,G=S.iridescence>0,j=S.sheen>0,oe=S.transmission>0,te=b&&!!S.anisotropyMap,re=C&&!!S.clearcoatMap,qe=C&&!!S.clearcoatNormalMap,se=C&&!!S.clearcoatRoughnessMap,de=G&&!!S.iridescenceMap,Ce=G&&!!S.iridescenceThicknessMap,ke=j&&!!S.sheenColorMap,pe=j&&!!S.sheenRoughnessMap,Ye=!!S.specularMap,Be=!!S.specularColorMap,bt=!!S.specularIntensityMap,N=oe&&!!S.transmissionMap,fe=oe&&!!S.thicknessMap,J=!!S.gradientMap,ee=!!S.alphaMap,xe=S.alphaTest>0,me=!!S.alphaHash,He=!!S.extensions,Rt=Vi;S.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Rt=i.toneMapping);let Jt={shaderID:$,shaderType:S.type,shaderName:S.name,vertexShader:Oe,fragmentShader:Q,defines:S.defines,customVertexShaderID:ne,customFragmentShaderID:be,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:We,batchingColor:We&&X._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&X.instanceColor!==null,instancingMorph:Ee&&X.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ce===null?i.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:sn,alphaToCoverage:!!S.alphaToCoverage,map:ut,matcap:Ke,envMap:Et,envMapMode:Et&&Z.mapping,envMapCubeUVHeight:H,aoMap:U,lightMap:Zt,bumpMap:Ze,normalMap:Xe,displacementMap:d&&Le,emissiveMap:dt,normalMapObjectSpace:Xe&&S.normalMapType===Vp,normalMapTangentSpace:Xe&&S.normalMapType===mh,metalnessMap:De,roughnessMap:P,anisotropy:b,anisotropyMap:te,clearcoat:C,clearcoatMap:re,clearcoatNormalMap:qe,clearcoatRoughnessMap:se,dispersion:V,iridescence:G,iridescenceMap:de,iridescenceThicknessMap:Ce,sheen:j,sheenColorMap:ke,sheenRoughnessMap:pe,specularMap:Ye,specularColorMap:Be,specularIntensityMap:bt,transmission:oe,transmissionMap:N,thicknessMap:fe,gradientMap:J,opaque:S.transparent===!1&&S.blending===Hi&&S.alphaToCoverage===!1,alphaMap:ee,alphaTest:xe,alphaHash:me,combine:S.combine,mapUv:ut&&x(S.map.channel),aoMapUv:U&&x(S.aoMap.channel),lightMapUv:Zt&&x(S.lightMap.channel),bumpMapUv:Ze&&x(S.bumpMap.channel),normalMapUv:Xe&&x(S.normalMap.channel),displacementMapUv:Le&&x(S.displacementMap.channel),emissiveMapUv:dt&&x(S.emissiveMap.channel),metalnessMapUv:De&&x(S.metalnessMap.channel),roughnessMapUv:P&&x(S.roughnessMap.channel),anisotropyMapUv:te&&x(S.anisotropyMap.channel),clearcoatMapUv:re&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:qe&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:pe&&x(S.sheenRoughnessMap.channel),specularMapUv:Ye&&x(S.specularMap.channel),specularColorMapUv:Be&&x(S.specularColorMap.channel),specularIntensityMapUv:bt&&x(S.specularIntensityMap.channel),transmissionMapUv:N&&x(S.transmissionMap.channel),thicknessMapUv:fe&&x(S.thicknessMap.channel),alphaMapUv:ee&&x(S.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Xe||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!F.attributes.uv&&(ut||ee),fog:!!L,useFog:S.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Se,skinning:X.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:_e,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:Rt,decodeVideoTexture:ut&&S.map.isVideoTexture===!0&&$e.getTransfer(S.map.colorSpace)===ft,decodeVideoTextureEmissive:dt&&S.emissiveMap.isVideoTexture===!0&&$e.getTransfer(S.emissiveMap.colorSpace)===ft,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Nt,flipSided:S.side===zt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:He&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&S.extensions.multiDraw===!0||We)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Jt.vertexUv1s=l.has(1),Jt.vertexUv2s=l.has(2),Jt.vertexUv3s=l.has(3),l.clear(),Jt}function p(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let k in S.defines)M.push(k),M.push(S.defines[k]);return S.isRawShaderMaterial===!1&&(_(M,S),y(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function _(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function v(S){let M=g[S.type],k;if(M){let W=Zn[M];k=Cm.clone(W.uniforms)}else k=S.uniforms;return k}function I(S,M){let k;for(let W=0,X=h.length;W<X;W++){let L=h[W];if(L.cacheKey===M){k=L,++k.usedTimes;break}}return k===void 0&&(k=new Fx(i,M,S,r),h.push(k)),k}function T(S){if(--S.usedTimes===0){let M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function R(S){c.remove(S)}function D(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:I,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:D}}function Bx(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Hx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function xd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function _d(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,f,g,x,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function o(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(u,d,f,g,x,m){let p=a(u,d,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||Hx),n.length>1&&n.sort(d||xd),s.length>1&&s.sort(d||xd)}function h(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function Vx(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new _d,i.set(n,[a])):s>=r.length?(a=new _d,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Gx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new A,color:new we};break;case"SpotLight":t={position:new A,direction:new A,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new A,halfWidth:new A,halfHeight:new A};break}return i[e.id]=t,t}}}function Wx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Xx=0;function qx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Yx(i){let e=new Gx,t=Wx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new A);let s=new A,r=new Ne,a=new Ne;function o(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,_=0,y=0,v=0,I=0,T=0,R=0;l.sort(qx);for(let S=0,M=l.length;S<M;S++){let k=l[S],W=k.color,X=k.intensity,L=k.distance,F=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)h+=W.r*X,u+=W.g*X,d+=W.b*X;else if(k.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(k.sh.coefficients[O],X);R++}else if(k.isDirectionalLight){let O=e.get(k);if(O.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){let Z=k.shadow,H=t.get(k);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=F,n.directionalShadowMatrix[f]=k.shadow.matrix,_++}n.directional[f]=O,f++}else if(k.isSpotLight){let O=e.get(k);O.position.setFromMatrixPosition(k.matrixWorld),O.color.copy(W).multiplyScalar(X),O.distance=L,O.coneCos=Math.cos(k.angle),O.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),O.decay=k.decay,n.spot[x]=O;let Z=k.shadow;if(k.map&&(n.spotLightMap[I]=k.map,I++,Z.updateMatrices(k),k.castShadow&&T++),n.spotLightMatrix[x]=Z.matrix,k.castShadow){let H=t.get(k);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.spotShadow[x]=H,n.spotShadowMap[x]=F,v++}x++}else if(k.isRectAreaLight){let O=e.get(k);O.color.copy(W).multiplyScalar(X),O.halfWidth.set(k.width*.5,0,0),O.halfHeight.set(0,k.height*.5,0),n.rectArea[m]=O,m++}else if(k.isPointLight){let O=e.get(k);if(O.color.copy(k.color).multiplyScalar(k.intensity),O.distance=k.distance,O.decay=k.decay,k.castShadow){let Z=k.shadow,H=t.get(k);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,H.shadowCameraNear=Z.camera.near,H.shadowCameraFar=Z.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=F,n.pointShadowMatrix[g]=k.shadow.matrix,y++}n.point[g]=O,g++}else if(k.isHemisphereLight){let O=e.get(k);O.skyColor.copy(k.color).multiplyScalar(X),O.groundColor.copy(k.groundColor).multiplyScalar(X),n.hemi[p]=O,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let D=n.hash;(D.directionalLength!==f||D.pointLength!==g||D.spotLength!==x||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==_||D.numPointShadows!==y||D.numSpotShadows!==v||D.numSpotMaps!==I||D.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+I-T,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,D.directionalLength=f,D.pointLength=g,D.spotLength=x,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=_,D.numPointShadows=y,D.numSpotShadows=v,D.numSpotMaps=I,D.numLightProbes=R,n.version=Xx++)}function c(l,h){let u=0,d=0,f=0,g=0,x=0,m=h.matrixWorldInverse;for(let p=0,_=l.length;p<_;p++){let y=l[p];if(y.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(y.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(y.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:n}}function vd(i){let e=new Yx(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function jx(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new vd(i),e.set(s,[o])):r>=a.length?(o=new vd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Ol=class extends cn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Bp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},zl=class extends cn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Kx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Jx(i,e,t){let n=new ia,s=new Fe,r=new Fe,a=new tt,o=new Ol({depthPacking:Hp}),c=new zl,l={},h=t.maxTextureSize,u={[Dn]:zt,[zt]:Dn,[Nt]:Nt},d=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:Kx,fragmentShader:Zx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new St;g.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ue(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gd;let p=this.type;this.render=function(T,R,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let S=i.getRenderTarget(),M=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Bi),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let X=p!==fi&&this.type===fi,L=p===fi&&this.type!==fi;for(let F=0,O=T.length;F<O;F++){let Z=T[F],H=Z.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let $=H.getFrameExtents();if(s.multiply($),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,H.mapSize.y=r.y)),H.map===null||X===!0||L===!0){let le=this.type!==fi?{minFilter:tn,magFilter:tn}:{};H.map!==null&&H.map.dispose(),H.map=new yi(s.x,s.y,le),H.map.texture.name=Z.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();let ie=H.getViewportCount();for(let le=0;le<ie;le++){let _e=H.getViewport(le);a.set(r.x*_e.x,r.y*_e.y,r.x*_e.z,r.y*_e.w),W.viewport(a),H.updateMatrices(Z,le),n=H.getFrustum(),v(R,D,H.camera,Z,this.type)}H.isPointLightShadow!==!0&&this.type===fi&&_(H,D),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,k)};function _(T,R){let D=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new yi(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,D,d,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,D,f,x,null)}function y(T,R,D,S){let M=null,k=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(k!==void 0)M=k;else if(M=D.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let W=M.uuid,X=R.uuid,L=l[W];L===void 0&&(L={},l[W]=L);let F=L[X];F===void 0&&(F=M.clone(),L[X]=F,R.addEventListener("dispose",I)),M=F}if(M.visible=R.visible,M.wireframe=R.wireframe,S===fi?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let W=i.properties.get(M);W.light=D}return M}function v(T,R,D,S,M){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===fi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);let X=e.update(T),L=T.material;if(Array.isArray(L)){let F=X.groups;for(let O=0,Z=F.length;O<Z;O++){let H=F[O],$=L[H.materialIndex];if($&&$.visible){let ie=y(T,$,S,M);T.onBeforeShadow(i,T,R,D,X,ie,H),i.renderBufferDirect(D,null,X,ie,T,H),T.onAfterShadow(i,T,R,D,X,ie,H)}}}else if(L.visible){let F=y(T,L,S,M);T.onBeforeShadow(i,T,R,D,X,F,null),i.renderBufferDirect(D,null,X,F,T,null),T.onAfterShadow(i,T,R,D,X,F,null)}}let W=T.children;for(let X=0,L=W.length;X<L;X++)v(W[X],R,D,S,M)}function I(T){T.target.removeEventListener("dispose",I);for(let D in l){let S=l[D],M=T.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}var Qx={[Xc]:qc,[Yc]:Zc,[jc]:Jc,[ir]:Kc,[qc]:Xc,[Zc]:Yc,[Jc]:jc,[Kc]:ir};function $x(i,e){function t(){let N=!1,fe=new tt,J=null,ee=new tt(0,0,0,0);return{setMask:function(xe){J!==xe&&!N&&(i.colorMask(xe,xe,xe,xe),J=xe)},setLocked:function(xe){N=xe},setClear:function(xe,me,He,Rt,Jt){Jt===!0&&(xe*=Rt,me*=Rt,He*=Rt),fe.set(xe,me,He,Rt),ee.equals(fe)===!1&&(i.clearColor(xe,me,He,Rt),ee.copy(fe))},reset:function(){N=!1,J=null,ee.set(-1,0,0,0)}}}function n(){let N=!1,fe=!1,J=null,ee=null,xe=null;return{setReversed:function(me){if(fe!==me){let He=e.get("EXT_clip_control");fe?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT);let Rt=xe;xe=null,this.setClear(Rt)}fe=me},getReversed:function(){return fe},setTest:function(me){me?ce(i.DEPTH_TEST):Se(i.DEPTH_TEST)},setMask:function(me){J!==me&&!N&&(i.depthMask(me),J=me)},setFunc:function(me){if(fe&&(me=Qx[me]),ee!==me){switch(me){case Xc:i.depthFunc(i.NEVER);break;case qc:i.depthFunc(i.ALWAYS);break;case Yc:i.depthFunc(i.LESS);break;case ir:i.depthFunc(i.LEQUAL);break;case jc:i.depthFunc(i.EQUAL);break;case Kc:i.depthFunc(i.GEQUAL);break;case Zc:i.depthFunc(i.GREATER);break;case Jc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ee=me}},setLocked:function(me){N=me},setClear:function(me){xe!==me&&(fe&&(me=1-me),i.clearDepth(me),xe=me)},reset:function(){N=!1,J=null,ee=null,xe=null,fe=!1}}}function s(){let N=!1,fe=null,J=null,ee=null,xe=null,me=null,He=null,Rt=null,Jt=null;return{setTest:function(lt){N||(lt?ce(i.STENCIL_TEST):Se(i.STENCIL_TEST))},setMask:function(lt){fe!==lt&&!N&&(i.stencilMask(lt),fe=lt)},setFunc:function(lt,Fn,ri){(J!==lt||ee!==Fn||xe!==ri)&&(i.stencilFunc(lt,Fn,ri),J=lt,ee=Fn,xe=ri)},setOp:function(lt,Fn,ri){(me!==lt||He!==Fn||Rt!==ri)&&(i.stencilOp(lt,Fn,ri),me=lt,He=Fn,Rt=ri)},setLocked:function(lt){N=lt},setClear:function(lt){Jt!==lt&&(i.clearStencil(lt),Jt=lt)},reset:function(){N=!1,fe=null,J=null,ee=null,xe=null,me=null,He=null,Rt=null,Jt=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,_=null,y=null,v=null,I=null,T=null,R=new we(0,0,0),D=0,S=!1,M=null,k=null,W=null,X=null,L=null,F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,Z=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),O=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),O=Z>=2);let $=null,ie={},le=i.getParameter(i.SCISSOR_BOX),_e=i.getParameter(i.VIEWPORT),Oe=new tt().fromArray(le),Q=new tt().fromArray(_e);function ne(N,fe,J,ee){let xe=new Uint8Array(4),me=i.createTexture();i.bindTexture(N,me),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let He=0;He<J;He++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(fe,0,i.RGBA,1,1,ee,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(fe+He,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return me}let be={};be[i.TEXTURE_2D]=ne(i.TEXTURE_2D,i.TEXTURE_2D,1),be[i.TEXTURE_CUBE_MAP]=ne(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),be[i.TEXTURE_2D_ARRAY]=ne(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),be[i.TEXTURE_3D]=ne(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ce(i.DEPTH_TEST),a.setFunc(ir),Ze(!1),Xe(Eu),ce(i.CULL_FACE),U(Bi);function ce(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function Se(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Ee(N,fe){return u[N]!==fe?(i.bindFramebuffer(N,fe),u[N]=fe,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=fe),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=fe),!0):!1}function We(N,fe){let J=f,ee=!1;if(N){J=d.get(fe),J===void 0&&(J=[],d.set(fe,J));let xe=N.textures;if(J.length!==xe.length||J[0]!==i.COLOR_ATTACHMENT0){for(let me=0,He=xe.length;me<He;me++)J[me]=i.COLOR_ATTACHMENT0+me;J.length=xe.length,ee=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,ee=!0);ee&&i.drawBuffers(J)}function ut(N){return g!==N?(i.useProgram(N),g=N,!0):!1}let Ke={[us]:i.FUNC_ADD,[up]:i.FUNC_SUBTRACT,[dp]:i.FUNC_REVERSE_SUBTRACT};Ke[fp]=i.MIN,Ke[pp]=i.MAX;let Et={[mp]:i.ZERO,[gp]:i.ONE,[bp]:i.SRC_COLOR,[Gc]:i.SRC_ALPHA,[Sp]:i.SRC_ALPHA_SATURATE,[yp]:i.DST_COLOR,[_p]:i.DST_ALPHA,[xp]:i.ONE_MINUS_SRC_COLOR,[Wc]:i.ONE_MINUS_SRC_ALPHA,[Mp]:i.ONE_MINUS_DST_COLOR,[vp]:i.ONE_MINUS_DST_ALPHA,[wp]:i.CONSTANT_COLOR,[Ep]:i.ONE_MINUS_CONSTANT_COLOR,[Tp]:i.CONSTANT_ALPHA,[Ap]:i.ONE_MINUS_CONSTANT_ALPHA};function U(N,fe,J,ee,xe,me,He,Rt,Jt,lt){if(N===Bi){x===!0&&(Se(i.BLEND),x=!1);return}if(x===!1&&(ce(i.BLEND),x=!0),N!==hp){if(N!==m||lt!==S){if((p!==us||v!==us)&&(i.blendEquation(i.FUNC_ADD),p=us,v=us),lt)switch(N){case Hi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fs:i.blendFunc(i.ONE,i.ONE);break;case Tu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Au:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Hi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Tu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Au:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}_=null,y=null,I=null,T=null,R.set(0,0,0),D=0,m=N,S=lt}return}xe=xe||fe,me=me||J,He=He||ee,(fe!==p||xe!==v)&&(i.blendEquationSeparate(Ke[fe],Ke[xe]),p=fe,v=xe),(J!==_||ee!==y||me!==I||He!==T)&&(i.blendFuncSeparate(Et[J],Et[ee],Et[me],Et[He]),_=J,y=ee,I=me,T=He),(Rt.equals(R)===!1||Jt!==D)&&(i.blendColor(Rt.r,Rt.g,Rt.b,Jt),R.copy(Rt),D=Jt),m=N,S=!1}function Zt(N,fe){N.side===Nt?Se(i.CULL_FACE):ce(i.CULL_FACE);let J=N.side===zt;fe&&(J=!J),Ze(J),N.blending===Hi&&N.transparent===!1?U(Bi):U(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let ee=N.stencilWrite;o.setTest(ee),ee&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),dt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ce(i.SAMPLE_ALPHA_TO_COVERAGE):Se(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(N){M!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),M=N)}function Xe(N){N!==cp?(ce(i.CULL_FACE),N!==k&&(N===Eu?i.cullFace(i.BACK):N===lp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Se(i.CULL_FACE),k=N}function Le(N){N!==W&&(O&&i.lineWidth(N),W=N)}function dt(N,fe,J){N?(ce(i.POLYGON_OFFSET_FILL),(X!==fe||L!==J)&&(i.polygonOffset(fe,J),X=fe,L=J)):Se(i.POLYGON_OFFSET_FILL)}function De(N){N?ce(i.SCISSOR_TEST):Se(i.SCISSOR_TEST)}function P(N){N===void 0&&(N=i.TEXTURE0+F-1),$!==N&&(i.activeTexture(N),$=N)}function b(N,fe,J){J===void 0&&($===null?J=i.TEXTURE0+F-1:J=$);let ee=ie[J];ee===void 0&&(ee={type:void 0,texture:void 0},ie[J]=ee),(ee.type!==N||ee.texture!==fe)&&($!==J&&(i.activeTexture(J),$=J),i.bindTexture(N,fe||be[N]),ee.type=N,ee.texture=fe)}function C(){let N=ie[$];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function V(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function G(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function qe(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function se(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ce(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ke(N){Oe.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Oe.copy(N))}function pe(N){Q.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Q.copy(N))}function Ye(N,fe){let J=l.get(fe);J===void 0&&(J=new WeakMap,l.set(fe,J));let ee=J.get(N);ee===void 0&&(ee=i.getUniformBlockIndex(fe,N.name),J.set(N,ee))}function Be(N,fe){let ee=l.get(fe).get(N);c.get(fe)!==ee&&(i.uniformBlockBinding(fe,ee,N.__bindingPointIndex),c.set(fe,ee))}function bt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},$=null,ie={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,_=null,y=null,v=null,I=null,T=null,R=new we(0,0,0),D=0,S=!1,M=null,k=null,W=null,X=null,L=null,Oe.set(0,0,i.canvas.width,i.canvas.height),Q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ce,disable:Se,bindFramebuffer:Ee,drawBuffers:We,useProgram:ut,setBlending:U,setMaterial:Zt,setFlipSided:Ze,setCullFace:Xe,setLineWidth:Le,setPolygonOffset:dt,setScissorTest:De,activeTexture:P,bindTexture:b,unbindTexture:C,compressedTexImage2D:V,compressedTexImage3D:G,texImage2D:de,texImage3D:Ce,updateUBOMapping:Ye,uniformBlockBinding:Be,texStorage2D:qe,texStorage3D:se,texSubImage2D:j,texSubImage3D:oe,compressedTexSubImage2D:te,compressedTexSubImage3D:re,scissor:ke,viewport:pe,reset:bt}}function yd(i,e,t,n){let s=e_(n);switch(t){case jd:return i*e;case Zd:return i*e;case Jd:return i*e*2;case lh:return i*e/s.components*s.byteLength;case hh:return i*e/s.components*s.byteLength;case Qd:return i*e*2/s.components*s.byteLength;case uh:return i*e*2/s.components*s.byteLength;case Kd:return i*e*3/s.components*s.byteLength;case Ln:return i*e*4/s.components*s.byteLength;case dh:return i*e*4/s.components*s.byteLength;case eo:case to:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case no:case io:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case tl:case il:return Math.max(i,16)*Math.max(e,8)/4;case el:case nl:return Math.max(i,8)*Math.max(e,8)/2;case sl:case rl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case al:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ol:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case cl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ll:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case hl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ul:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case dl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case fl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case pl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ml:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case gl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case bl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case xl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case _l:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case vl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case so:case yl:case Ml:return Math.ceil(i/4)*Math.ceil(e/4)*16;case $d:case Sl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case wl:case El:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function e_(i){switch(i){case _i:case Xd:return{byteLength:1,components:1};case ta:case qd:case la:return{byteLength:2,components:1};case oh:case ch:return{byteLength:2,components:4};case ps:case ah:case Gn:return{byteLength:4,components:1};case Yd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function t_(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Fe,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,b){return f?new OffscreenCanvas(P,b):na("canvas")}function x(P,b,C){let V=1,G=De(P);if((G.width>C||G.height>C)&&(V=C/Math.max(G.width,G.height)),V<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let j=Math.floor(V*G.width),oe=Math.floor(V*G.height);u===void 0&&(u=g(j,oe));let te=b?g(j,oe):u;return te.width=j,te.height=oe,te.getContext("2d").drawImage(P,0,0,j,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+j+"x"+oe+")."),te}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){i.generateMipmap(P)}function _(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(P,b,C,V,G=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let j=b;if(b===i.RED&&(C===i.FLOAT&&(j=i.R32F),C===i.HALF_FLOAT&&(j=i.R16F),C===i.UNSIGNED_BYTE&&(j=i.R8)),b===i.RED_INTEGER&&(C===i.UNSIGNED_BYTE&&(j=i.R8UI),C===i.UNSIGNED_SHORT&&(j=i.R16UI),C===i.UNSIGNED_INT&&(j=i.R32UI),C===i.BYTE&&(j=i.R8I),C===i.SHORT&&(j=i.R16I),C===i.INT&&(j=i.R32I)),b===i.RG&&(C===i.FLOAT&&(j=i.RG32F),C===i.HALF_FLOAT&&(j=i.RG16F),C===i.UNSIGNED_BYTE&&(j=i.RG8)),b===i.RG_INTEGER&&(C===i.UNSIGNED_BYTE&&(j=i.RG8UI),C===i.UNSIGNED_SHORT&&(j=i.RG16UI),C===i.UNSIGNED_INT&&(j=i.RG32UI),C===i.BYTE&&(j=i.RG8I),C===i.SHORT&&(j=i.RG16I),C===i.INT&&(j=i.RG32I)),b===i.RGB_INTEGER&&(C===i.UNSIGNED_BYTE&&(j=i.RGB8UI),C===i.UNSIGNED_SHORT&&(j=i.RGB16UI),C===i.UNSIGNED_INT&&(j=i.RGB32UI),C===i.BYTE&&(j=i.RGB8I),C===i.SHORT&&(j=i.RGB16I),C===i.INT&&(j=i.RGB32I)),b===i.RGBA_INTEGER&&(C===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),C===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),C===i.UNSIGNED_INT&&(j=i.RGBA32UI),C===i.BYTE&&(j=i.RGBA8I),C===i.SHORT&&(j=i.RGBA16I),C===i.INT&&(j=i.RGBA32I)),b===i.RGB&&C===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),b===i.RGBA){let oe=G?Fo:$e.getTransfer(V);C===i.FLOAT&&(j=i.RGBA32F),C===i.HALF_FLOAT&&(j=i.RGBA16F),C===i.UNSIGNED_BYTE&&(j=oe===ft?i.SRGB8_ALPHA8:i.RGBA8),C===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),C===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function v(P,b){let C;return P?b===null||b===ps||b===ar?C=i.DEPTH24_STENCIL8:b===Gn?C=i.DEPTH32F_STENCIL8:b===ta&&(C=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ps||b===ar?C=i.DEPTH_COMPONENT24:b===Gn?C=i.DEPTH_COMPONENT32F:b===ta&&(C=i.DEPTH_COMPONENT16),C}function I(P,b){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==tn&&P.minFilter!==pn?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function T(P){let b=P.target;b.removeEventListener("dispose",T),D(b),b.isVideoTexture&&h.delete(b)}function R(P){let b=P.target;b.removeEventListener("dispose",R),M(b)}function D(P){let b=n.get(P);if(b.__webglInit===void 0)return;let C=P.source,V=d.get(C);if(V){let G=V[b.__cacheKey];G.usedTimes--,G.usedTimes===0&&S(P),Object.keys(V).length===0&&d.delete(C)}n.remove(P)}function S(P){let b=n.get(P);i.deleteTexture(b.__webglTexture);let C=P.source,V=d.get(C);delete V[b.__cacheKey],a.memory.textures--}function M(P){let b=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(b.__webglFramebuffer[V]))for(let G=0;G<b.__webglFramebuffer[V].length;G++)i.deleteFramebuffer(b.__webglFramebuffer[V][G]);else i.deleteFramebuffer(b.__webglFramebuffer[V]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[V])}else{if(Array.isArray(b.__webglFramebuffer))for(let V=0;V<b.__webglFramebuffer.length;V++)i.deleteFramebuffer(b.__webglFramebuffer[V]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let V=0;V<b.__webglColorRenderbuffer.length;V++)b.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[V]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let C=P.textures;for(let V=0,G=C.length;V<G;V++){let j=n.get(C[V]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(C[V])}n.remove(P)}let k=0;function W(){k=0}function X(){let P=k;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),k+=1,P}function L(P){let b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function F(P,b){let C=n.get(P);if(P.isVideoTexture&&Le(P),P.isRenderTargetTexture===!1&&P.version>0&&C.__version!==P.version){let V=P.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(C,P,b);return}}t.bindTexture(i.TEXTURE_2D,C.__webglTexture,i.TEXTURE0+b)}function O(P,b){let C=n.get(P);if(P.version>0&&C.__version!==P.version){Q(C,P,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,C.__webglTexture,i.TEXTURE0+b)}function Z(P,b){let C=n.get(P);if(P.version>0&&C.__version!==P.version){Q(C,P,b);return}t.bindTexture(i.TEXTURE_3D,C.__webglTexture,i.TEXTURE0+b)}function H(P,b){let C=n.get(P);if(P.version>0&&C.__version!==P.version){ne(C,P,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+b)}let $={[xi]:i.REPEAT,[mi]:i.CLAMP_TO_EDGE,[ea]:i.MIRRORED_REPEAT},ie={[tn]:i.NEAREST,[rh]:i.NEAREST_MIPMAP_NEAREST,[Zs]:i.NEAREST_MIPMAP_LINEAR,[pn]:i.LINEAR,[Zr]:i.LINEAR_MIPMAP_NEAREST,[Jn]:i.LINEAR_MIPMAP_LINEAR},le={[Gp]:i.NEVER,[Kp]:i.ALWAYS,[Wp]:i.LESS,[tf]:i.LEQUAL,[Xp]:i.EQUAL,[jp]:i.GEQUAL,[qp]:i.GREATER,[Yp]:i.NOTEQUAL};function _e(P,b){if(b.type===Gn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===pn||b.magFilter===Zr||b.magFilter===Zs||b.magFilter===Jn||b.minFilter===pn||b.minFilter===Zr||b.minFilter===Zs||b.minFilter===Jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,$[b.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,$[b.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,$[b.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,ie[b.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,ie[b.minFilter]),b.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,le[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===tn||b.minFilter!==Zs&&b.minFilter!==Jn||b.type===Gn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let C=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Oe(P,b){let C=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",T));let V=b.source,G=d.get(V);G===void 0&&(G={},d.set(V,G));let j=L(b);if(j!==P.__cacheKey){G[j]===void 0&&(G[j]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,C=!0),G[j].usedTimes++;let oe=G[P.__cacheKey];oe!==void 0&&(G[P.__cacheKey].usedTimes--,oe.usedTimes===0&&S(b)),P.__cacheKey=j,P.__webglTexture=G[j].texture}return C}function Q(P,b,C){let V=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(V=i.TEXTURE_3D);let G=Oe(P,b),j=b.source;t.bindTexture(V,P.__webglTexture,i.TEXTURE0+C);let oe=n.get(j);if(j.version!==oe.__version||G===!0){t.activeTexture(i.TEXTURE0+C);let te=$e.getPrimaries($e.workingColorSpace),re=b.colorSpace===Fi?null:$e.getPrimaries(b.colorSpace),qe=b.colorSpace===Fi||te===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let se=x(b.image,!1,s.maxTextureSize);se=dt(b,se);let de=r.convert(b.format,b.colorSpace),Ce=r.convert(b.type),ke=y(b.internalFormat,de,Ce,b.colorSpace,b.isVideoTexture);_e(V,b);let pe,Ye=b.mipmaps,Be=b.isVideoTexture!==!0,bt=oe.__version===void 0||G===!0,N=j.dataReady,fe=I(b,se);if(b.isDepthTexture)ke=v(b.format===or,b.type),bt&&(Be?t.texStorage2D(i.TEXTURE_2D,1,ke,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,ke,se.width,se.height,0,de,Ce,null));else if(b.isDataTexture)if(Ye.length>0){Be&&bt&&t.texStorage2D(i.TEXTURE_2D,fe,ke,Ye[0].width,Ye[0].height);for(let J=0,ee=Ye.length;J<ee;J++)pe=Ye[J],Be?N&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,pe.width,pe.height,de,Ce,pe.data):t.texImage2D(i.TEXTURE_2D,J,ke,pe.width,pe.height,0,de,Ce,pe.data);b.generateMipmaps=!1}else Be?(bt&&t.texStorage2D(i.TEXTURE_2D,fe,ke,se.width,se.height),N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,se.width,se.height,de,Ce,se.data)):t.texImage2D(i.TEXTURE_2D,0,ke,se.width,se.height,0,de,Ce,se.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Be&&bt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,ke,Ye[0].width,Ye[0].height,se.depth);for(let J=0,ee=Ye.length;J<ee;J++)if(pe=Ye[J],b.format!==Ln)if(de!==null)if(Be){if(N)if(b.layerUpdates.size>0){let xe=yd(pe.width,pe.height,b.format,b.type);for(let me of b.layerUpdates){let He=pe.data.subarray(me*xe/pe.data.BYTES_PER_ELEMENT,(me+1)*xe/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,me,pe.width,pe.height,1,de,He)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,pe.width,pe.height,se.depth,de,pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,ke,pe.width,pe.height,se.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?N&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,pe.width,pe.height,se.depth,de,Ce,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,J,ke,pe.width,pe.height,se.depth,0,de,Ce,pe.data)}else{Be&&bt&&t.texStorage2D(i.TEXTURE_2D,fe,ke,Ye[0].width,Ye[0].height);for(let J=0,ee=Ye.length;J<ee;J++)pe=Ye[J],b.format!==Ln?de!==null?Be?N&&t.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,pe.width,pe.height,de,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,J,ke,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?N&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,pe.width,pe.height,de,Ce,pe.data):t.texImage2D(i.TEXTURE_2D,J,ke,pe.width,pe.height,0,de,Ce,pe.data)}else if(b.isDataArrayTexture)if(Be){if(bt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,ke,se.width,se.height,se.depth),N)if(b.layerUpdates.size>0){let J=yd(se.width,se.height,b.format,b.type);for(let ee of b.layerUpdates){let xe=se.data.subarray(ee*J/se.data.BYTES_PER_ELEMENT,(ee+1)*J/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ee,se.width,se.height,1,de,Ce,xe)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,de,Ce,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ke,se.width,se.height,se.depth,0,de,Ce,se.data);else if(b.isData3DTexture)Be?(bt&&t.texStorage3D(i.TEXTURE_3D,fe,ke,se.width,se.height,se.depth),N&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,de,Ce,se.data)):t.texImage3D(i.TEXTURE_3D,0,ke,se.width,se.height,se.depth,0,de,Ce,se.data);else if(b.isFramebufferTexture){if(bt)if(Be)t.texStorage2D(i.TEXTURE_2D,fe,ke,se.width,se.height);else{let J=se.width,ee=se.height;for(let xe=0;xe<fe;xe++)t.texImage2D(i.TEXTURE_2D,xe,ke,J,ee,0,de,Ce,null),J>>=1,ee>>=1}}else if(Ye.length>0){if(Be&&bt){let J=De(Ye[0]);t.texStorage2D(i.TEXTURE_2D,fe,ke,J.width,J.height)}for(let J=0,ee=Ye.length;J<ee;J++)pe=Ye[J],Be?N&&t.texSubImage2D(i.TEXTURE_2D,J,0,0,de,Ce,pe):t.texImage2D(i.TEXTURE_2D,J,ke,de,Ce,pe);b.generateMipmaps=!1}else if(Be){if(bt){let J=De(se);t.texStorage2D(i.TEXTURE_2D,fe,ke,J.width,J.height)}N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,Ce,se)}else t.texImage2D(i.TEXTURE_2D,0,ke,de,Ce,se);m(b)&&p(V),oe.__version=j.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function ne(P,b,C){if(b.image.length!==6)return;let V=Oe(P,b),G=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+C);let j=n.get(G);if(G.version!==j.__version||V===!0){t.activeTexture(i.TEXTURE0+C);let oe=$e.getPrimaries($e.workingColorSpace),te=b.colorSpace===Fi?null:$e.getPrimaries(b.colorSpace),re=b.colorSpace===Fi||oe===te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let qe=b.isCompressedTexture||b.image[0].isCompressedTexture,se=b.image[0]&&b.image[0].isDataTexture,de=[];for(let ee=0;ee<6;ee++)!qe&&!se?de[ee]=x(b.image[ee],!0,s.maxCubemapSize):de[ee]=se?b.image[ee].image:b.image[ee],de[ee]=dt(b,de[ee]);let Ce=de[0],ke=r.convert(b.format,b.colorSpace),pe=r.convert(b.type),Ye=y(b.internalFormat,ke,pe,b.colorSpace),Be=b.isVideoTexture!==!0,bt=j.__version===void 0||V===!0,N=G.dataReady,fe=I(b,Ce);_e(i.TEXTURE_CUBE_MAP,b);let J;if(qe){Be&&bt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,Ye,Ce.width,Ce.height);for(let ee=0;ee<6;ee++){J=de[ee].mipmaps;for(let xe=0;xe<J.length;xe++){let me=J[xe];b.format!==Ln?ke!==null?Be?N&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe,0,0,me.width,me.height,ke,me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe,Ye,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe,0,0,me.width,me.height,ke,pe,me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe,Ye,me.width,me.height,0,ke,pe,me.data)}}}else{if(J=b.mipmaps,Be&&bt){J.length>0&&fe++;let ee=De(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,Ye,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(se){Be?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,de[ee].width,de[ee].height,ke,pe,de[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ye,de[ee].width,de[ee].height,0,ke,pe,de[ee].data);for(let xe=0;xe<J.length;xe++){let He=J[xe].image[ee].image;Be?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe+1,0,0,He.width,He.height,ke,pe,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe+1,Ye,He.width,He.height,0,ke,pe,He.data)}}else{Be?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ke,pe,de[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ye,ke,pe,de[ee]);for(let xe=0;xe<J.length;xe++){let me=J[xe];Be?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe+1,0,0,ke,pe,me.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,xe+1,Ye,ke,pe,me.image[ee])}}}m(b)&&p(i.TEXTURE_CUBE_MAP),j.__version=G.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function be(P,b,C,V,G,j){let oe=r.convert(C.format,C.colorSpace),te=r.convert(C.type),re=y(C.internalFormat,oe,te,C.colorSpace),qe=n.get(b),se=n.get(C);if(se.__renderTarget=b,!qe.__hasExternalTextures){let de=Math.max(1,b.width>>j),Ce=Math.max(1,b.height>>j);G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?t.texImage3D(G,j,re,de,Ce,b.depth,0,oe,te,null):t.texImage2D(G,j,re,de,Ce,0,oe,te,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),Xe(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,G,se.__webglTexture,0,Ze(b)):(G===i.TEXTURE_2D||G>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,G,se.__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ce(P,b,C){if(i.bindRenderbuffer(i.RENDERBUFFER,P),b.depthBuffer){let V=b.depthTexture,G=V&&V.isDepthTexture?V.type:null,j=v(b.stencilBuffer,G),oe=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=Ze(b);Xe(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,j,b.width,b.height):C?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,j,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,j,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,P)}else{let V=b.textures;for(let G=0;G<V.length;G++){let j=V[G],oe=r.convert(j.format,j.colorSpace),te=r.convert(j.type),re=y(j.internalFormat,oe,te,j.colorSpace),qe=Ze(b);C&&Xe(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qe,re,b.width,b.height):Xe(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qe,re,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,re,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let V=n.get(b.depthTexture);V.__renderTarget=b,(!V.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),F(b.depthTexture,0);let G=V.__webglTexture,j=Ze(b);if(b.depthTexture.format===er)Xe(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,G,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,G,0);else if(b.depthTexture.format===or)Xe(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,G,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,G,0);else throw new Error("Unknown depthTexture format")}function Ee(P){let b=n.get(P),C=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){let V=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),V){let G=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,V.removeEventListener("dispose",G)};V.addEventListener("dispose",G),b.__depthDisposeCallback=G}b.__boundDepthTexture=V}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(C)throw new Error("target.depthTexture not supported in Cube render targets");Se(b.__webglFramebuffer,P)}else if(C){b.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[V]),b.__webglDepthbuffer[V]===void 0)b.__webglDepthbuffer[V]=i.createRenderbuffer(),ce(b.__webglDepthbuffer[V],P,!1);else{let G=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=b.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,G,i.RENDERBUFFER,j)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),ce(b.__webglDepthbuffer,P,!1);else{let V=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,G),i.framebufferRenderbuffer(i.FRAMEBUFFER,V,i.RENDERBUFFER,G)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function We(P,b,C){let V=n.get(P);b!==void 0&&be(V.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),C!==void 0&&Ee(P)}function ut(P){let b=P.texture,C=n.get(P),V=n.get(b);P.addEventListener("dispose",R);let G=P.textures,j=P.isWebGLCubeRenderTarget===!0,oe=G.length>1;if(oe||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=b.version,a.memory.textures++),j){C.__webglFramebuffer=[];for(let te=0;te<6;te++)if(b.mipmaps&&b.mipmaps.length>0){C.__webglFramebuffer[te]=[];for(let re=0;re<b.mipmaps.length;re++)C.__webglFramebuffer[te][re]=i.createFramebuffer()}else C.__webglFramebuffer[te]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){C.__webglFramebuffer=[];for(let te=0;te<b.mipmaps.length;te++)C.__webglFramebuffer[te]=i.createFramebuffer()}else C.__webglFramebuffer=i.createFramebuffer();if(oe)for(let te=0,re=G.length;te<re;te++){let qe=n.get(G[te]);qe.__webglTexture===void 0&&(qe.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&Xe(P)===!1){C.__webglMultisampledFramebuffer=i.createFramebuffer(),C.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let te=0;te<G.length;te++){let re=G[te];C.__webglColorRenderbuffer[te]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,C.__webglColorRenderbuffer[te]);let qe=r.convert(re.format,re.colorSpace),se=r.convert(re.type),de=y(re.internalFormat,qe,se,re.colorSpace,P.isXRRenderTarget===!0),Ce=Ze(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,de,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+te,i.RENDERBUFFER,C.__webglColorRenderbuffer[te])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(C.__webglDepthRenderbuffer=i.createRenderbuffer(),ce(C.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),_e(i.TEXTURE_CUBE_MAP,b);for(let te=0;te<6;te++)if(b.mipmaps&&b.mipmaps.length>0)for(let re=0;re<b.mipmaps.length;re++)be(C.__webglFramebuffer[te][re],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,re);else be(C.__webglFramebuffer[te],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);m(b)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let te=0,re=G.length;te<re;te++){let qe=G[te],se=n.get(qe);t.bindTexture(i.TEXTURE_2D,se.__webglTexture),_e(i.TEXTURE_2D,qe),be(C.__webglFramebuffer,P,qe,i.COLOR_ATTACHMENT0+te,i.TEXTURE_2D,0),m(qe)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let te=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(te=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(te,V.__webglTexture),_e(te,b),b.mipmaps&&b.mipmaps.length>0)for(let re=0;re<b.mipmaps.length;re++)be(C.__webglFramebuffer[re],P,b,i.COLOR_ATTACHMENT0,te,re);else be(C.__webglFramebuffer,P,b,i.COLOR_ATTACHMENT0,te,0);m(b)&&p(te),t.unbindTexture()}P.depthBuffer&&Ee(P)}function Ke(P){let b=P.textures;for(let C=0,V=b.length;C<V;C++){let G=b[C];if(m(G)){let j=_(P),oe=n.get(G).__webglTexture;t.bindTexture(j,oe),p(j),t.unbindTexture()}}}let Et=[],U=[];function Zt(P){if(P.samples>0){if(Xe(P)===!1){let b=P.textures,C=P.width,V=P.height,G=i.COLOR_BUFFER_BIT,j=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=n.get(P),te=b.length>1;if(te)for(let re=0;re<b.length;re++)t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let re=0;re<b.length;re++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(G|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(G|=i.STENCIL_BUFFER_BIT)),te){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,oe.__webglColorRenderbuffer[re]);let qe=n.get(b[re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qe,0)}i.blitFramebuffer(0,0,C,V,0,0,C,V,G,i.NEAREST),c===!0&&(Et.length=0,U.length=0,Et.push(i.COLOR_ATTACHMENT0+re),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Et.push(j),U.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,U)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Et))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),te)for(let re=0;re<b.length;re++){t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,oe.__webglColorRenderbuffer[re]);let qe=n.get(b[re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,qe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){let b=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Ze(P){return Math.min(s.maxSamples,P.samples)}function Xe(P){let b=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Le(P){let b=a.render.frame;h.get(P)!==b&&(h.set(P,b),P.update())}function dt(P,b){let C=P.colorSpace,V=P.format,G=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||C!==sn&&C!==Fi&&($e.getTransfer(C)===ft?(V!==Ln||G!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",C)),b}function De(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=X,this.resetTextureUnits=W,this.setTexture2D=F,this.setTexture2DArray=O,this.setTexture3D=Z,this.setTextureCube=H,this.rebindTextures=We,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=Zt,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Xe}function n_(i,e){function t(n,s=Fi){let r,a=$e.getTransfer(s);if(n===_i)return i.UNSIGNED_BYTE;if(n===oh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ch)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Yd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xd)return i.BYTE;if(n===qd)return i.SHORT;if(n===ta)return i.UNSIGNED_SHORT;if(n===ah)return i.INT;if(n===ps)return i.UNSIGNED_INT;if(n===Gn)return i.FLOAT;if(n===la)return i.HALF_FLOAT;if(n===jd)return i.ALPHA;if(n===Kd)return i.RGB;if(n===Ln)return i.RGBA;if(n===Zd)return i.LUMINANCE;if(n===Jd)return i.LUMINANCE_ALPHA;if(n===er)return i.DEPTH_COMPONENT;if(n===or)return i.DEPTH_STENCIL;if(n===lh)return i.RED;if(n===hh)return i.RED_INTEGER;if(n===Qd)return i.RG;if(n===uh)return i.RG_INTEGER;if(n===dh)return i.RGBA_INTEGER;if(n===eo||n===to||n===no||n===io)if(a===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===eo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===eo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===to)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===io)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===el||n===tl||n===nl||n===il)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===el)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===tl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===il)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sl||n===rl||n===al)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===sl||n===rl)return a===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===al)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ol||n===cl||n===ll||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===bl||n===xl||n===_l||n===vl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ol)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===cl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ll)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===hl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ul)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===dl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ml)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===_l)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===so||n===yl||n===Ml)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===so)return a===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ml)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$d||n===Sl||n===wl||n===El)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===so)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Sl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===El)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ar?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Bl=class extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ot=class extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}},i_={type:"move"},$r=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(i_)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ot;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},s_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,r_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Hl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Bt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ln({vertexShader:s_,fragmentShader:r_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ue(new Mn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Vl=class extends vi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,x=new Hl,m=t.getContextAttributes(),p=null,_=null,y=[],v=[],I=new Fe,T=null,R=new kt;R.viewport=new tt;let D=new kt;D.viewport=new tt;let S=[R,D],M=new Bl,k=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ne=y[Q];return ne===void 0&&(ne=new $r,y[Q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Q){let ne=y[Q];return ne===void 0&&(ne=new $r,y[Q]=ne),ne.getGripSpace()},this.getHand=function(Q){let ne=y[Q];return ne===void 0&&(ne=new $r,y[Q]=ne),ne.getHandSpace()};function X(Q){let ne=v.indexOf(Q.inputSource);if(ne===-1)return;let be=y[ne];be!==void 0&&(be.update(Q.inputSource,Q.frame,l||a),be.dispatchEvent({type:Q.type,data:Q.inputSource}))}function L(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",F);for(let Q=0;Q<y.length;Q++){let ne=v[Q];ne!==null&&(v[Q]=null,y[Q].disconnect(ne))}k=null,W=null,x.reset(),e.setRenderTarget(p),f=null,d=null,u=null,s=null,_=null,Oe.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",L),s.addEventListener("inputsourceschange",F),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0){let ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ne),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new yi(f.framebufferWidth,f.framebufferHeight,{format:Ln,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,be=null,ce=null;m.depth&&(ce=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=m.stencil?or:er,be=m.stencil?ar:ps);let Se={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Se),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new yi(d.textureWidth,d.textureHeight,{format:Ln,type:_i,depthTexture:new go(d.textureWidth,d.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Oe.setContext(s),Oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function F(Q){for(let ne=0;ne<Q.removed.length;ne++){let be=Q.removed[ne],ce=v.indexOf(be);ce>=0&&(v[ce]=null,y[ce].disconnect(be))}for(let ne=0;ne<Q.added.length;ne++){let be=Q.added[ne],ce=v.indexOf(be);if(ce===-1){for(let Ee=0;Ee<y.length;Ee++)if(Ee>=v.length){v.push(be),ce=Ee;break}else if(v[Ee]===null){v[Ee]=be,ce=Ee;break}if(ce===-1)break}let Se=y[ce];Se&&Se.connect(be)}}let O=new A,Z=new A;function H(Q,ne,be){O.setFromMatrixPosition(ne.matrixWorld),Z.setFromMatrixPosition(be.matrixWorld);let ce=O.distanceTo(Z),Se=ne.projectionMatrix.elements,Ee=be.projectionMatrix.elements,We=Se[14]/(Se[10]-1),ut=Se[14]/(Se[10]+1),Ke=(Se[9]+1)/Se[5],Et=(Se[9]-1)/Se[5],U=(Se[8]-1)/Se[0],Zt=(Ee[8]+1)/Ee[0],Ze=We*U,Xe=We*Zt,Le=ce/(-U+Zt),dt=Le*-U;if(ne.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(dt),Q.translateZ(Le),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Se[10]===-1)Q.projectionMatrix.copy(ne.projectionMatrix),Q.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let De=We+Le,P=ut+Le,b=Ze-dt,C=Xe+(ce-dt),V=Ke*ut/P*De,G=Et*ut/P*De;Q.projectionMatrix.makePerspective(b,C,V,G,De,P),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function $(Q,ne){ne===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ne.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ne=Q.near,be=Q.far;x.texture!==null&&(x.depthNear>0&&(ne=x.depthNear),x.depthFar>0&&(be=x.depthFar)),M.near=D.near=R.near=ne,M.far=D.far=R.far=be,(k!==M.near||W!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),k=M.near,W=M.far),R.layers.mask=Q.layers.mask|2,D.layers.mask=Q.layers.mask|4,M.layers.mask=R.layers.mask|D.layers.mask;let ce=Q.parent,Se=M.cameras;$(M,ce);for(let Ee=0;Ee<Se.length;Ee++)$(Se[Ee],ce);Se.length===2?H(M,R,D):M.projectionMatrix.copy(R.projectionMatrix),ie(Q,M,ce)};function ie(Q,ne,be){be===null?Q.matrix.copy(ne.matrixWorld):(Q.matrix.copy(be.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ne.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ne.projectionMatrix),Q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=hr*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Q){c=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let le=null;function _e(Q,ne){if(h=ne.getViewerPose(l||a),g=ne,h!==null){let be=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let ce=!1;be.length!==M.cameras.length&&(M.cameras.length=0,ce=!0);for(let Ee=0;Ee<be.length;Ee++){let We=be[Ee],ut=null;if(f!==null)ut=f.getViewport(We);else{let Et=u.getViewSubImage(d,We);ut=Et.viewport,Ee===0&&(e.setRenderTargetTextures(_,Et.colorTexture,d.ignoreDepthValues?void 0:Et.depthStencilTexture),e.setRenderTarget(_))}let Ke=S[Ee];Ke===void 0&&(Ke=new kt,Ke.layers.enable(Ee),Ke.viewport=new tt,S[Ee]=Ke),Ke.matrix.fromArray(We.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(We.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(ut.x,ut.y,ut.width,ut.height),Ee===0&&(M.matrix.copy(Ke.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ce===!0&&M.cameras.push(Ke)}let Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")){let Ee=u.getDepthInformation(be[0]);Ee&&Ee.isValid&&Ee.texture&&x.init(e,Ee,s.renderState)}}for(let be=0;be<y.length;be++){let ce=v[be],Se=y[be];ce!==null&&Se!==void 0&&Se.update(ce,ne,l||a)}le&&le(Q,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),g=null}let Oe=new af;Oe.setAnimationLoop(_e),this.setAnimationLoop=function(Q){le=Q},this.dispose=function(){}}},ls=new nn,a_=new Ne;function o_(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,rf(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,_,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,_,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===zt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===zt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _=e.get(p),y=_.envMap,v=_.envMapRotation;y&&(m.envMap.value=y,ls.copy(v),ls.x*=-1,ls.y*=-1,ls.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),m.envMapRotation.value.setFromMatrix4(a_.makeRotationFromEuler(ls)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,_,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function c_(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,y){let v=y.program;n.uniformBlockBinding(_,v)}function l(_,y){let v=s[_.id];v===void 0&&(g(_),v=h(_),s[_.id]=v,_.addEventListener("dispose",m));let I=y.program;n.updateUBOMapping(_,I);let T=e.render.frame;r[_.id]!==T&&(d(_),r[_.id]=T)}function h(_){let y=u();_.__bindingPointIndex=y;let v=i.createBuffer(),I=_.__size,T=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,I,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let y=s[_.id],v=_.uniforms,I=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let T=0,R=v.length;T<R;T++){let D=Array.isArray(v[T])?v[T]:[v[T]];for(let S=0,M=D.length;S<M;S++){let k=D[S];if(f(k,T,S,I)===!0){let W=k.__offset,X=Array.isArray(k.value)?k.value:[k.value],L=0;for(let F=0;F<X.length;F++){let O=X[F],Z=x(O);typeof O=="number"||typeof O=="boolean"?(k.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,W+L,k.__data)):O.isMatrix3?(k.__data[0]=O.elements[0],k.__data[1]=O.elements[1],k.__data[2]=O.elements[2],k.__data[3]=0,k.__data[4]=O.elements[3],k.__data[5]=O.elements[4],k.__data[6]=O.elements[5],k.__data[7]=0,k.__data[8]=O.elements[6],k.__data[9]=O.elements[7],k.__data[10]=O.elements[8],k.__data[11]=0):(O.toArray(k.__data,L),L+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,k.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,y,v,I){let T=_.value,R=y+"_"+v;if(I[R]===void 0)return typeof T=="number"||typeof T=="boolean"?I[R]=T:I[R]=T.clone(),!0;{let D=I[R];if(typeof T=="number"||typeof T=="boolean"){if(D!==T)return I[R]=T,!0}else if(D.equals(T)===!1)return D.copy(T),!0}return!1}function g(_){let y=_.uniforms,v=0,I=16;for(let R=0,D=y.length;R<D;R++){let S=Array.isArray(y[R])?y[R]:[y[R]];for(let M=0,k=S.length;M<k;M++){let W=S[M],X=Array.isArray(W.value)?W.value:[W.value];for(let L=0,F=X.length;L<F;L++){let O=X[L],Z=x(O),H=v%I,$=H%Z.boundary,ie=H+$;v+=$,ie!==0&&I-ie<Z.storage&&(v+=I-ie),W.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=v,v+=Z.storage}}}let T=v%I;return T>0&&(v+=I-T),_.__size=v,_.__cache={},this}function x(_){let y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){let y=_.target;y.removeEventListener("dispose",m);let v=a.indexOf(y.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}var bo=class{constructor(e={}){let{canvas:t=dm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let g=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,_=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=it,this.toneMapping=Vi,this.toneMappingExposure=1;let v=this,I=!1,T=0,R=0,D=null,S=-1,M=null,k=new tt,W=new tt,X=null,L=new we(0),F=0,O=t.width,Z=t.height,H=1,$=null,ie=null,le=new tt(0,0,O,Z),_e=new tt(0,0,O,Z),Oe=!1,Q=new ia,ne=!1,be=!1,ce=new Ne,Se=new Ne,Ee=new A,We=new tt,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ke=!1;function Et(){return D===null?H:1}let U=n;function Zt(w,z){return t.getContext(w,z)}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",me,!1),U===null){let z="webgl2";if(U=Zt(z,w),U===null)throw Zt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ze,Xe,Le,dt,De,P,b,C,V,G,j,oe,te,re,qe,se,de,Ce,ke,pe,Ye,Be,bt,N;function fe(){Ze=new wb(U),Ze.init(),Be=new n_(U,Ze),Xe=new xb(U,Ze,e,Be),Le=new $x(U,Ze),Xe.reverseDepthBuffer&&d&&Le.buffers.depth.setReversed(!0),dt=new Ab(U),De=new Bx,P=new t_(U,Ze,Le,De,Xe,Be,dt),b=new vb(v),C=new Sb(v),V=new km(U),bt=new gb(U,V),G=new Eb(U,V,dt,bt),j=new Cb(U,G,V,dt),ke=new Rb(U,Xe,P),se=new _b(De),oe=new zx(v,b,C,Ze,Xe,bt,se),te=new o_(v,De),re=new Vx,qe=new jx(Ze),Ce=new mb(v,b,C,Le,j,f,c),de=new Jx(v,j,Xe),N=new c_(U,dt,Xe,Le),pe=new bb(U,Ze,dt),Ye=new Tb(U,Ze,dt),dt.programs=oe.programs,v.capabilities=Xe,v.extensions=Ze,v.properties=De,v.renderLists=re,v.shadowMap=de,v.state=Le,v.info=dt}fe();let J=new Vl(v,U);this.xr=J,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let w=Ze.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Ze.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(w){w!==void 0&&(H=w,this.setSize(O,Z,!1))},this.getSize=function(w){return w.set(O,Z)},this.setSize=function(w,z,q=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=w,Z=z,t.width=Math.floor(w*H),t.height=Math.floor(z*H),q===!0&&(t.style.width=w+"px",t.style.height=z+"px"),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w.set(O*H,Z*H).floor()},this.setDrawingBufferSize=function(w,z,q){O=w,Z=z,H=q,t.width=Math.floor(w*q),t.height=Math.floor(z*q),this.setViewport(0,0,w,z)},this.getCurrentViewport=function(w){return w.copy(k)},this.getViewport=function(w){return w.copy(le)},this.setViewport=function(w,z,q,Y){w.isVector4?le.set(w.x,w.y,w.z,w.w):le.set(w,z,q,Y),Le.viewport(k.copy(le).multiplyScalar(H).round())},this.getScissor=function(w){return w.copy(_e)},this.setScissor=function(w,z,q,Y){w.isVector4?_e.set(w.x,w.y,w.z,w.w):_e.set(w,z,q,Y),Le.scissor(W.copy(_e).multiplyScalar(H).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(w){Le.setScissorTest(Oe=w)},this.setOpaqueSort=function(w){$=w},this.setTransparentSort=function(w){ie=w},this.getClearColor=function(w){return w.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(w=!0,z=!0,q=!0){let Y=0;if(w){let B=!1;if(D!==null){let ae=D.texture.format;B=ae===dh||ae===uh||ae===hh}if(B){let ae=D.texture.type,ge=ae===_i||ae===ps||ae===ta||ae===ar||ae===oh||ae===ch,Te=Ce.getClearColor(),Ae=Ce.getClearAlpha(),ze=Te.r,Ve=Te.g,Re=Te.b;ge?(g[0]=ze,g[1]=Ve,g[2]=Re,g[3]=Ae,U.clearBufferuiv(U.COLOR,0,g)):(x[0]=ze,x[1]=Ve,x[2]=Re,x[3]=Ae,U.clearBufferiv(U.COLOR,0,x))}else Y|=U.COLOR_BUFFER_BIT}z&&(Y|=U.DEPTH_BUFFER_BIT),q&&(Y|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",me,!1),re.dispose(),qe.dispose(),De.dispose(),b.dispose(),C.dispose(),j.dispose(),bt.dispose(),N.dispose(),oe.dispose(),J.dispose(),J.removeEventListener("sessionstart",bu),J.removeEventListener("sessionend",xu),is.stop()};function ee(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let w=dt.autoReset,z=de.enabled,q=de.autoUpdate,Y=de.needsUpdate,B=de.type;fe(),dt.autoReset=w,de.enabled=z,de.autoUpdate=q,de.needsUpdate=Y,de.type=B}function me(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function He(w){let z=w.target;z.removeEventListener("dispose",He),Rt(z)}function Rt(w){Jt(w),De.remove(w)}function Jt(w){let z=De.get(w).programs;z!==void 0&&(z.forEach(function(q){oe.releaseProgram(q)}),w.isShaderMaterial&&oe.releaseShaderCache(w))}this.renderBufferDirect=function(w,z,q,Y,B,ae){z===null&&(z=ut);let ge=B.isMesh&&B.matrixWorld.determinant()<0,Te=rp(w,z,q,Y,B);Le.setMaterial(Y,ge);let Ae=q.index,ze=1;if(Y.wireframe===!0){if(Ae=G.getWireframeAttribute(q),Ae===void 0)return;ze=2}let Ve=q.drawRange,Re=q.attributes.position,nt=Ve.start*ze,xt=(Ve.start+Ve.count)*ze;ae!==null&&(nt=Math.max(nt,ae.start*ze),xt=Math.min(xt,(ae.start+ae.count)*ze)),Ae!==null?(nt=Math.max(nt,0),xt=Math.min(xt,Ae.count)):Re!=null&&(nt=Math.max(nt,0),xt=Math.min(xt,Re.count));let _t=xt-nt;if(_t<0||_t===1/0)return;bt.setup(B,Y,Te,q,Ae);let fn,rt=pe;if(Ae!==null&&(fn=V.get(Ae),rt=Ye,rt.setIndex(fn)),B.isMesh)Y.wireframe===!0?(Le.setLineWidth(Y.wireframeLinewidth*Et()),rt.setMode(U.LINES)):rt.setMode(U.TRIANGLES);else if(B.isLine){let Pe=Y.linewidth;Pe===void 0&&(Pe=1),Le.setLineWidth(Pe*Et()),B.isLineSegments?rt.setMode(U.LINES):B.isLineLoop?rt.setMode(U.LINE_LOOP):rt.setMode(U.LINE_STRIP)}else B.isPoints?rt.setMode(U.POINTS):B.isSprite&&rt.setMode(U.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)rt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))rt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Pe=B._multiDrawStarts,ai=B._multiDrawCounts,at=B._multiDrawCount,On=Ae?V.get(Ae).bytesPerElement:1,Ps=De.get(Y).currentProgram.getUniforms();for(let bn=0;bn<at;bn++)Ps.setValue(U,"_gl_DrawID",bn),rt.render(Pe[bn]/On,ai[bn])}else if(B.isInstancedMesh)rt.renderInstances(nt,_t,B.count);else if(q.isInstancedBufferGeometry){let Pe=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ai=Math.min(q.instanceCount,Pe);rt.renderInstances(nt,_t,ai)}else rt.render(nt,_t)};function lt(w,z,q){w.transparent===!0&&w.side===Nt&&w.forceSinglePass===!1?(w.side=zt,w.needsUpdate=!0,Sa(w,z,q),w.side=Dn,w.needsUpdate=!0,Sa(w,z,q),w.side=Nt):Sa(w,z,q)}this.compile=function(w,z,q=null){q===null&&(q=w),p=qe.get(q),p.init(z),y.push(p),q.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),w!==q&&w.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();let Y=new Set;return w.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let ae=B.material;if(ae)if(Array.isArray(ae))for(let ge=0;ge<ae.length;ge++){let Te=ae[ge];lt(Te,q,B),Y.add(Te)}else lt(ae,q,B),Y.add(ae)}),y.pop(),p=null,Y},this.compileAsync=function(w,z,q=null){let Y=this.compile(w,z,q);return new Promise(B=>{function ae(){if(Y.forEach(function(ge){De.get(ge).currentProgram.isReady()&&Y.delete(ge)}),Y.size===0){B(w);return}setTimeout(ae,10)}Ze.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Fn=null;function ri(w){Fn&&Fn(w)}function bu(){is.stop()}function xu(){is.start()}let is=new af;is.setAnimationLoop(ri),typeof self<"u"&&is.setContext(self),this.setAnimationLoop=function(w){Fn=w,J.setAnimationLoop(w),w===null?is.stop():is.start()},J.addEventListener("sessionstart",bu),J.addEventListener("sessionend",xu),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(z),z=J.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,z,D),p=qe.get(w,y.length),p.init(z),y.push(p),Se.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Q.setFromProjectionMatrix(Se),be=this.localClippingEnabled,ne=se.init(this.clippingPlanes,be),m=re.get(w,_.length),m.init(),_.push(m),J.enabled===!0&&J.isPresenting===!0){let ae=v.xr.getDepthSensingMesh();ae!==null&&lc(ae,z,-1/0,v.sortObjects)}lc(w,z,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort($,ie),Ke=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,Ke&&Ce.addToRenderList(m,w),this.info.render.frame++,ne===!0&&se.beginShadows();let q=p.state.shadowsArray;de.render(q,w,z),ne===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=m.opaque,B=m.transmissive;if(p.setupLights(),z.isArrayCamera){let ae=z.cameras;if(B.length>0)for(let ge=0,Te=ae.length;ge<Te;ge++){let Ae=ae[ge];vu(Y,B,w,Ae)}Ke&&Ce.render(w);for(let ge=0,Te=ae.length;ge<Te;ge++){let Ae=ae[ge];_u(m,w,Ae,Ae.viewport)}}else B.length>0&&vu(Y,B,w,z),Ke&&Ce.render(w),_u(m,w,z);D!==null&&(P.updateMultisampleRenderTarget(D),P.updateRenderTargetMipmap(D)),w.isScene===!0&&w.onAfterRender(v,w,z),bt.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],ne===!0&&se.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function lc(w,z,q,Y){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Q.intersectsSprite(w)){Y&&We.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Se);let ge=j.update(w),Te=w.material;Te.visible&&m.push(w,ge,Te,q,We.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Q.intersectsObject(w))){let ge=j.update(w),Te=w.material;if(Y&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),We.copy(w.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),We.copy(ge.boundingSphere.center)),We.applyMatrix4(w.matrixWorld).applyMatrix4(Se)),Array.isArray(Te)){let Ae=ge.groups;for(let ze=0,Ve=Ae.length;ze<Ve;ze++){let Re=Ae[ze],nt=Te[Re.materialIndex];nt&&nt.visible&&m.push(w,ge,nt,q,We.z,Re)}}else Te.visible&&m.push(w,ge,Te,q,We.z,null)}}let ae=w.children;for(let ge=0,Te=ae.length;ge<Te;ge++)lc(ae[ge],z,q,Y)}function _u(w,z,q,Y){let B=w.opaque,ae=w.transmissive,ge=w.transparent;p.setupLightsView(q),ne===!0&&se.setGlobalState(v.clippingPlanes,q),Y&&Le.viewport(k.copy(Y)),B.length>0&&Ma(B,z,q),ae.length>0&&Ma(ae,z,q),ge.length>0&&Ma(ge,z,q),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function vu(w,z,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new yi(1,1,{generateMipmaps:!0,type:Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float")?la:_i,minFilter:Jn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace}));let ae=p.state.transmissionRenderTarget[Y.id],ge=Y.viewport||k;ae.setSize(ge.z,ge.w);let Te=v.getRenderTarget();v.setRenderTarget(ae),v.getClearColor(L),F=v.getClearAlpha(),F<1&&v.setClearColor(16777215,.5),v.clear(),Ke&&Ce.render(q);let Ae=v.toneMapping;v.toneMapping=Vi;let ze=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),ne===!0&&se.setGlobalState(v.clippingPlanes,Y),Ma(w,q,Y),P.updateMultisampleRenderTarget(ae),P.updateRenderTargetMipmap(ae),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Re=0,nt=z.length;Re<nt;Re++){let xt=z[Re],_t=xt.object,fn=xt.geometry,rt=xt.material,Pe=xt.group;if(rt.side===Nt&&_t.layers.test(Y.layers)){let ai=rt.side;rt.side=zt,rt.needsUpdate=!0,yu(_t,q,Y,fn,rt,Pe),rt.side=ai,rt.needsUpdate=!0,Ve=!0}}Ve===!0&&(P.updateMultisampleRenderTarget(ae),P.updateRenderTargetMipmap(ae))}v.setRenderTarget(Te),v.setClearColor(L,F),ze!==void 0&&(Y.viewport=ze),v.toneMapping=Ae}function Ma(w,z,q){let Y=z.isScene===!0?z.overrideMaterial:null;for(let B=0,ae=w.length;B<ae;B++){let ge=w[B],Te=ge.object,Ae=ge.geometry,ze=Y===null?ge.material:Y,Ve=ge.group;Te.layers.test(q.layers)&&yu(Te,z,q,Ae,ze,Ve)}}function yu(w,z,q,Y,B,ae){w.onBeforeRender(v,z,q,Y,B,ae),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(v,z,q,Y,w,ae),B.transparent===!0&&B.side===Nt&&B.forceSinglePass===!1?(B.side=zt,B.needsUpdate=!0,v.renderBufferDirect(q,z,Y,B,w,ae),B.side=Dn,B.needsUpdate=!0,v.renderBufferDirect(q,z,Y,B,w,ae),B.side=Nt):v.renderBufferDirect(q,z,Y,B,w,ae),w.onAfterRender(v,z,q,Y,B,ae)}function Sa(w,z,q){z.isScene!==!0&&(z=ut);let Y=De.get(w),B=p.state.lights,ae=p.state.shadowsArray,ge=B.state.version,Te=oe.getParameters(w,B.state,ae,z,q),Ae=oe.getProgramCacheKey(Te),ze=Y.programs;Y.environment=w.isMeshStandardMaterial?z.environment:null,Y.fog=z.fog,Y.envMap=(w.isMeshStandardMaterial?C:b).get(w.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&w.envMap===null?z.environmentRotation:w.envMapRotation,ze===void 0&&(w.addEventListener("dispose",He),ze=new Map,Y.programs=ze);let Ve=ze.get(Ae);if(Ve!==void 0){if(Y.currentProgram===Ve&&Y.lightsStateVersion===ge)return Su(w,Te),Ve}else Te.uniforms=oe.getUniforms(w),w.onBeforeCompile(Te,v),Ve=oe.acquireProgram(Te,Ae),ze.set(Ae,Ve),Y.uniforms=Te.uniforms;let Re=Y.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Re.clippingPlanes=se.uniform),Su(w,Te),Y.needsLights=op(w),Y.lightsStateVersion=ge,Y.needsLights&&(Re.ambientLightColor.value=B.state.ambient,Re.lightProbe.value=B.state.probe,Re.directionalLights.value=B.state.directional,Re.directionalLightShadows.value=B.state.directionalShadow,Re.spotLights.value=B.state.spot,Re.spotLightShadows.value=B.state.spotShadow,Re.rectAreaLights.value=B.state.rectArea,Re.ltc_1.value=B.state.rectAreaLTC1,Re.ltc_2.value=B.state.rectAreaLTC2,Re.pointLights.value=B.state.point,Re.pointLightShadows.value=B.state.pointShadow,Re.hemisphereLights.value=B.state.hemi,Re.directionalShadowMap.value=B.state.directionalShadowMap,Re.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Re.spotShadowMap.value=B.state.spotShadowMap,Re.spotLightMatrix.value=B.state.spotLightMatrix,Re.spotLightMap.value=B.state.spotLightMap,Re.pointShadowMap.value=B.state.pointShadowMap,Re.pointShadowMatrix.value=B.state.pointShadowMatrix),Y.currentProgram=Ve,Y.uniformsList=null,Ve}function Mu(w){if(w.uniformsList===null){let z=w.currentProgram.getUniforms();w.uniformsList=nr.seqWithValue(z.seq,w.uniforms)}return w.uniformsList}function Su(w,z){let q=De.get(w);q.outputColorSpace=z.outputColorSpace,q.batching=z.batching,q.batchingColor=z.batchingColor,q.instancing=z.instancing,q.instancingColor=z.instancingColor,q.instancingMorph=z.instancingMorph,q.skinning=z.skinning,q.morphTargets=z.morphTargets,q.morphNormals=z.morphNormals,q.morphColors=z.morphColors,q.morphTargetsCount=z.morphTargetsCount,q.numClippingPlanes=z.numClippingPlanes,q.numIntersection=z.numClipIntersection,q.vertexAlphas=z.vertexAlphas,q.vertexTangents=z.vertexTangents,q.toneMapping=z.toneMapping}function rp(w,z,q,Y,B){z.isScene!==!0&&(z=ut),P.resetTextureUnits();let ae=z.fog,ge=Y.isMeshStandardMaterial?z.environment:null,Te=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:sn,Ae=(Y.isMeshStandardMaterial?C:b).get(Y.envMap||ge),ze=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ve=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Re=!!q.morphAttributes.position,nt=!!q.morphAttributes.normal,xt=!!q.morphAttributes.color,_t=Vi;Y.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(_t=v.toneMapping);let fn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,rt=fn!==void 0?fn.length:0,Pe=De.get(Y),ai=p.state.lights;if(ne===!0&&(be===!0||w!==M)){let Pn=w===M&&Y.id===S;se.setState(Y,w,Pn)}let at=!1;Y.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==ai.state.version||Pe.outputColorSpace!==Te||B.isBatchedMesh&&Pe.batching===!1||!B.isBatchedMesh&&Pe.batching===!0||B.isBatchedMesh&&Pe.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Pe.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Pe.instancing===!1||!B.isInstancedMesh&&Pe.instancing===!0||B.isSkinnedMesh&&Pe.skinning===!1||!B.isSkinnedMesh&&Pe.skinning===!0||B.isInstancedMesh&&Pe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Pe.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Pe.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Pe.instancingMorph===!1&&B.morphTexture!==null||Pe.envMap!==Ae||Y.fog===!0&&Pe.fog!==ae||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==se.numPlanes||Pe.numIntersection!==se.numIntersection)||Pe.vertexAlphas!==ze||Pe.vertexTangents!==Ve||Pe.morphTargets!==Re||Pe.morphNormals!==nt||Pe.morphColors!==xt||Pe.toneMapping!==_t||Pe.morphTargetsCount!==rt)&&(at=!0):(at=!0,Pe.__version=Y.version);let On=Pe.currentProgram;at===!0&&(On=Sa(Y,z,B));let Ps=!1,bn=!1,Nr=!1,vt=On.getUniforms(),Kn=Pe.uniforms;if(Le.useProgram(On.program)&&(Ps=!0,bn=!0,Nr=!0),Y.id!==S&&(S=Y.id,bn=!0),Ps||M!==w){Le.buffers.depth.getReversed()?(ce.copy(w.projectionMatrix),pm(ce),mm(ce),vt.setValue(U,"projectionMatrix",ce)):vt.setValue(U,"projectionMatrix",w.projectionMatrix),vt.setValue(U,"viewMatrix",w.matrixWorldInverse);let Ci=vt.map.cameraPosition;Ci!==void 0&&Ci.setValue(U,Ee.setFromMatrixPosition(w.matrixWorld)),Xe.logarithmicDepthBuffer&&vt.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&vt.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,bn=!0,Nr=!0)}if(B.isSkinnedMesh){vt.setOptional(U,B,"bindMatrix"),vt.setOptional(U,B,"bindMatrixInverse");let Pn=B.skeleton;Pn&&(Pn.boneTexture===null&&Pn.computeBoneTexture(),vt.setValue(U,"boneTexture",Pn.boneTexture,P))}B.isBatchedMesh&&(vt.setOptional(U,B,"batchingTexture"),vt.setValue(U,"batchingTexture",B._matricesTexture,P),vt.setOptional(U,B,"batchingIdTexture"),vt.setValue(U,"batchingIdTexture",B._indirectTexture,P),vt.setOptional(U,B,"batchingColorTexture"),B._colorsTexture!==null&&vt.setValue(U,"batchingColorTexture",B._colorsTexture,P));let Ur=q.morphAttributes;if((Ur.position!==void 0||Ur.normal!==void 0||Ur.color!==void 0)&&ke.update(B,q,On),(bn||Pe.receiveShadow!==B.receiveShadow)&&(Pe.receiveShadow=B.receiveShadow,vt.setValue(U,"receiveShadow",B.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Kn.envMap.value=Ae,Kn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&z.environment!==null&&(Kn.envMapIntensity.value=z.environmentIntensity),bn&&(vt.setValue(U,"toneMappingExposure",v.toneMappingExposure),Pe.needsLights&&ap(Kn,Nr),ae&&Y.fog===!0&&te.refreshFogUniforms(Kn,ae),te.refreshMaterialUniforms(Kn,Y,H,Z,p.state.transmissionRenderTarget[w.id]),nr.upload(U,Mu(Pe),Kn,P)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(nr.upload(U,Mu(Pe),Kn,P),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&vt.setValue(U,"center",B.center),vt.setValue(U,"modelViewMatrix",B.modelViewMatrix),vt.setValue(U,"normalMatrix",B.normalMatrix),vt.setValue(U,"modelMatrix",B.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let Pn=Y.uniformsGroups;for(let Ci=0,Pi=Pn.length;Ci<Pi;Ci++){let wu=Pn[Ci];N.update(wu,On),N.bind(wu,On)}}return On}function ap(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function op(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(w,z,q){De.get(w.texture).__webglTexture=z,De.get(w.depthTexture).__webglTexture=q;let Y=De.get(w);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||Ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,z){let q=De.get(w);q.__webglFramebuffer=z,q.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(w,z=0,q=0){D=w,T=z,R=q;let Y=!0,B=null,ae=!1,ge=!1;if(w){let Ae=De.get(w);if(Ae.__useDefaultFramebuffer!==void 0)Le.bindFramebuffer(U.FRAMEBUFFER,null),Y=!1;else if(Ae.__webglFramebuffer===void 0)P.setupRenderTarget(w);else if(Ae.__hasExternalTextures)P.rebindTextures(w,De.get(w.texture).__webglTexture,De.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Re=w.depthTexture;if(Ae.__boundDepthTexture!==Re){if(Re!==null&&De.has(Re)&&(w.width!==Re.image.width||w.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(w)}}let ze=w.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(ge=!0);let Ve=De.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ve[z])?B=Ve[z][q]:B=Ve[z],ae=!0):w.samples>0&&P.useMultisampledRTT(w)===!1?B=De.get(w).__webglMultisampledFramebuffer:Array.isArray(Ve)?B=Ve[q]:B=Ve,k.copy(w.viewport),W.copy(w.scissor),X=w.scissorTest}else k.copy(le).multiplyScalar(H).floor(),W.copy(_e).multiplyScalar(H).floor(),X=Oe;if(Le.bindFramebuffer(U.FRAMEBUFFER,B)&&Y&&Le.drawBuffers(w,B),Le.viewport(k),Le.scissor(W),Le.setScissorTest(X),ae){let Ae=De.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ae.__webglTexture,q)}else if(ge){let Ae=De.get(w.texture),ze=z||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ae.__webglTexture,q||0,ze)}S=-1},this.readRenderTargetPixels=function(w,z,q,Y,B,ae,ge){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=De.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ge!==void 0&&(Te=Te[ge]),Te){Le.bindFramebuffer(U.FRAMEBUFFER,Te);try{let Ae=w.texture,ze=Ae.format,Ve=Ae.type;if(!Xe.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=w.width-Y&&q>=0&&q<=w.height-B&&U.readPixels(z,q,Y,B,Be.convert(ze),Be.convert(Ve),ae)}finally{let Ae=D!==null?De.get(D).__webglFramebuffer:null;Le.bindFramebuffer(U.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(w,z,q,Y,B,ae,ge){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=De.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ge!==void 0&&(Te=Te[ge]),Te){let Ae=w.texture,ze=Ae.format,Ve=Ae.type;if(!Xe.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=w.width-Y&&q>=0&&q<=w.height-B){Le.bindFramebuffer(U.FRAMEBUFFER,Te);let Re=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Re),U.bufferData(U.PIXEL_PACK_BUFFER,ae.byteLength,U.STREAM_READ),U.readPixels(z,q,Y,B,Be.convert(ze),Be.convert(Ve),0);let nt=D!==null?De.get(D).__webglFramebuffer:null;Le.bindFramebuffer(U.FRAMEBUFFER,nt);let xt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await fm(U,xt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Re),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ae),U.deleteBuffer(Re),U.deleteSync(xt),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,z=null,q=0){w.isTexture!==!0&&(jr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,w=arguments[1]);let Y=Math.pow(2,-q),B=Math.floor(w.image.width*Y),ae=Math.floor(w.image.height*Y),ge=z!==null?z.x:0,Te=z!==null?z.y:0;P.setTexture2D(w,0),U.copyTexSubImage2D(U.TEXTURE_2D,q,0,0,ge,Te,B,ae),Le.unbindTexture()},this.copyTextureToTexture=function(w,z,q=null,Y=null,B=0){w.isTexture!==!0&&(jr("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,w=arguments[1],z=arguments[2],B=arguments[3]||0,q=null);let ae,ge,Te,Ae,ze,Ve,Re,nt,xt,_t=w.isCompressedTexture?w.mipmaps[B]:w.image;q!==null?(ae=q.max.x-q.min.x,ge=q.max.y-q.min.y,Te=q.isBox3?q.max.z-q.min.z:1,Ae=q.min.x,ze=q.min.y,Ve=q.isBox3?q.min.z:0):(ae=_t.width,ge=_t.height,Te=_t.depth||1,Ae=0,ze=0,Ve=0),Y!==null?(Re=Y.x,nt=Y.y,xt=Y.z):(Re=0,nt=0,xt=0);let fn=Be.convert(z.format),rt=Be.convert(z.type),Pe;z.isData3DTexture?(P.setTexture3D(z,0),Pe=U.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(P.setTexture2DArray(z,0),Pe=U.TEXTURE_2D_ARRAY):(P.setTexture2D(z,0),Pe=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment);let ai=U.getParameter(U.UNPACK_ROW_LENGTH),at=U.getParameter(U.UNPACK_IMAGE_HEIGHT),On=U.getParameter(U.UNPACK_SKIP_PIXELS),Ps=U.getParameter(U.UNPACK_SKIP_ROWS),bn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,_t.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_t.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ae),U.pixelStorei(U.UNPACK_SKIP_ROWS,ze),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ve);let Nr=w.isDataArrayTexture||w.isData3DTexture,vt=z.isDataArrayTexture||z.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let Kn=De.get(w),Ur=De.get(z),Pn=De.get(Kn.__renderTarget),Ci=De.get(Ur.__renderTarget);Le.bindFramebuffer(U.READ_FRAMEBUFFER,Pn.__webglFramebuffer),Le.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let Pi=0;Pi<Te;Pi++)Nr&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,De.get(w).__webglTexture,B,Ve+Pi),w.isDepthTexture?(vt&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,De.get(z).__webglTexture,B,xt+Pi),U.blitFramebuffer(Ae,ze,ae,ge,Re,nt,ae,ge,U.DEPTH_BUFFER_BIT,U.NEAREST)):vt?U.copyTexSubImage3D(Pe,B,Re,nt,xt+Pi,Ae,ze,ae,ge):U.copyTexSubImage2D(Pe,B,Re,nt,xt+Pi,Ae,ze,ae,ge);Le.bindFramebuffer(U.READ_FRAMEBUFFER,null),Le.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else vt?w.isDataTexture||w.isData3DTexture?U.texSubImage3D(Pe,B,Re,nt,xt,ae,ge,Te,fn,rt,_t.data):z.isCompressedArrayTexture?U.compressedTexSubImage3D(Pe,B,Re,nt,xt,ae,ge,Te,fn,_t.data):U.texSubImage3D(Pe,B,Re,nt,xt,ae,ge,Te,fn,rt,_t):w.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,B,Re,nt,ae,ge,fn,rt,_t.data):w.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,B,Re,nt,_t.width,_t.height,fn,_t.data):U.texSubImage2D(U.TEXTURE_2D,B,Re,nt,ae,ge,fn,rt,_t);U.pixelStorei(U.UNPACK_ROW_LENGTH,ai),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,at),U.pixelStorei(U.UNPACK_SKIP_PIXELS,On),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ps),U.pixelStorei(U.UNPACK_SKIP_IMAGES,bn),B===0&&z.generateMipmaps&&U.generateMipmap(Pe),Le.unbindTexture()},this.copyTextureToTexture3D=function(w,z,q=null,Y=null,B=0){return w.isTexture!==!0&&(jr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,w=arguments[2],z=arguments[3],B=arguments[4]||0),jr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,z,q,Y,B)},this.initRenderTarget=function(w){De.get(w).__webglFramebuffer===void 0&&P.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?P.setTextureCube(w,0):w.isData3DTexture?P.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?P.setTexture2DArray(w,0):P.setTexture2D(w,0),Le.unbindTexture()},this.resetState=function(){T=0,R=0,D=null,Le.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}};var pr=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new we(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},xo=class extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nn,this.environmentIntensity=1,this.environmentRotation=new nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},mr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Tl,this.updateRanges=[],this.version=0,this.uuid=Wn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},an=new A,ms=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Vn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Vn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Vn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Vn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Tt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},gs=class extends cn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new we(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Xs,Hr=new A,qs=new A,Ys=new A,js=new Fe,Vr=new Fe,uf=new Ne,Wa=new A,Gr=new A,Xa=new A,Md=new Fe,Fc=new Fe,Sd=new Fe,gr=class extends Mt{constructor(e=new gs){if(super(),this.isSprite=!0,this.type="Sprite",Xs===void 0){Xs=new St;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new mr(t,5);Xs.setIndex([0,1,2,0,2,3]),Xs.setAttribute("position",new ms(n,3,0,!1)),Xs.setAttribute("uv",new ms(n,2,3,!1))}this.geometry=Xs,this.material=e,this.center=new Fe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qs.setFromMatrixScale(this.matrixWorld),uf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ys.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qs.multiplyScalar(-Ys.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;qa(Wa.set(-.5,-.5,0),Ys,a,qs,s,r),qa(Gr.set(.5,-.5,0),Ys,a,qs,s,r),qa(Xa.set(.5,.5,0),Ys,a,qs,s,r),Md.set(0,0),Fc.set(1,0),Sd.set(1,1);let o=e.ray.intersectTriangle(Wa,Gr,Xa,!1,Hr);if(o===null&&(qa(Gr.set(-.5,.5,0),Ys,a,qs,s,r),Fc.set(0,1),o=e.ray.intersectTriangle(Wa,Xa,Gr,!1,Hr),o===null))return;let c=e.ray.origin.distanceTo(Hr);c<e.near||c>e.far||t.push({distance:c,point:Hr.clone(),uv:Oi.getInterpolation(Hr,Wa,Gr,Xa,Md,Fc,Sd,new Fe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function qa(i,e,t,n,s,r){js.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Vr.x=r*js.x-s*js.y,Vr.y=s*js.x+r*js.y):Vr.copy(js),i.copy(e),i.x+=Vr.x,i.y+=Vr.y,i.applyMatrix4(uf)}var wd=new A,Ed=new tt,Td=new tt,l_=new A,Ad=new Ne,Ya=new A,Oc=new vn,Rd=new Ne,zc=new ur,_o=class extends Ue{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ru,this.bindMatrix=new Ne,this.bindMatrixInverse=new Ne,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new mn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ya),this.boundingBox.expandByPoint(Ya)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new vn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ya),this.boundingSphere.expandByPoint(Ya)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oc.copy(this.boundingSphere),Oc.applyMatrix4(s),e.ray.intersectsSphere(Oc)!==!1&&(Rd.copy(s).invert(),zc.copy(e.ray).applyMatrix4(Rd),!(this.boundingBox!==null&&zc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,zc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new tt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ru?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Up?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Ed.fromBufferAttribute(s.attributes.skinIndex,e),Td.fromBufferAttribute(s.attributes.skinWeight,e),wd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Td.getComponent(r);if(a!==0){let o=Ed.getComponent(r);Ad.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(l_.copy(wd).applyMatrix4(Ad),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},sa=class extends Mt{constructor(){super(),this.isBone=!0,this.type="Bone"}},vo=class extends Bt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=tn,h=tn,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Cd=new Ne,h_=new Ne,yo=class i{constructor(e=[],t=[]){this.uuid=Wn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ne)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ne;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:h_;Cd.multiplyMatrices(o,t[r]),Cd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new vo(t,e,e,Ln,Gn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new sa),this.bones.push(a),this.boneInverses.push(new Ne().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},bs=class extends Tt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ks=new Ne,Pd=new Ne,ja=[],Id=new mn,u_=new Ne,Wr=new Ue,Xr=new vn,Xn=class extends Ue{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,u_)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ks),Id.copy(e.boundingBox).applyMatrix4(Ks),this.boundingBox.union(Id)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new vn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ks),Xr.copy(e.boundingSphere).applyMatrix4(Ks),this.boundingSphere.union(Xr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Wr.geometry=this.geometry,Wr.material=this.material,Wr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xr.copy(this.boundingSphere),Xr.applyMatrix4(n),e.ray.intersectsSphere(Xr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ks),Pd.multiplyMatrices(n,Ks),Wr.matrixWorld=Pd,Wr.raycast(e,ja);for(let a=0,o=ja.length;a<o;a++){let c=ja[a];c.instanceId=r,c.object=this,t.push(c)}ja.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new bs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new vo(new Float32Array(s*this.count),s,this.count,lh,Gn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ra=class extends cn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Mo=new A,So=new A,Ld=new Ne,qr=new ur,Ka=new vn,Bc=new A,Dd=new A,br=class extends Mt{constructor(e=new St,t=new ra){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Mo.fromBufferAttribute(t,s-1),So.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Mo.distanceTo(So);e.setAttribute("lineDistance",new Je(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ka.copy(n.boundingSphere),Ka.applyMatrix4(s),Ka.radius+=r,e.ray.intersectsSphere(Ka)===!1)return;Ld.copy(s).invert(),qr.copy(e.ray).applyMatrix4(Ld);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=l){let p=h.getX(x),_=h.getX(x+1),y=Za(this,e,qr,c,p,_);y&&t.push(y)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),p=Za(this,e,qr,c,x,m);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=l){let p=Za(this,e,qr,c,x,x+1);p&&t.push(p)}if(this.isLineLoop){let x=Za(this,e,qr,c,g-1,f);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Za(i,e,t,n,s,r){let a=i.geometry.attributes.position;if(Mo.fromBufferAttribute(a,s),So.fromBufferAttribute(a,r),t.distanceSqToSegment(Mo,So,Bc,Dd)>n)return;Bc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Bc);if(!(c<e.near||c>e.far))return{distance:c,point:Dd.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var kd=new A,Nd=new A,wo=class extends br{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)kd.fromBufferAttribute(t,s),Nd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+kd.distanceTo(Nd);e.setAttribute("lineDistance",new Je(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Eo=class extends br{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},xs=class extends cn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ud=new Ne,Gl=new ur,Ja=new vn,Qa=new A,xr=class extends Mt{constructor(e=new St,t=new xs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ja.copy(n.boundingSphere),Ja.applyMatrix4(s),Ja.radius+=r,e.ray.intersectsSphere(Ja)===!1)return;Ud.copy(s).invert(),Gl.copy(e.ray).applyMatrix4(Ud);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,x=f;g<x;g++){let m=l.getX(g);Qa.fromBufferAttribute(u,m),Fd(Qa,m,c,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,x=f;g<x;g++)Qa.fromBufferAttribute(u,g),Fd(Qa,g,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Fd(i,e,t,n,s,r,a){let o=Gl.distanceSqToPoint(i);if(o<t){let c=new A;Gl.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var hn=class extends Bt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var To=class i extends St{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new A,h=new Fe;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Je(a,3)),this.setAttribute("normal",new Je(o,3)),this.setAttribute("uv",new Je(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},_r=class i extends St{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=n/2,p=0;_(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Je(u,3)),this.setAttribute("normal",new Je(d,3)),this.setAttribute("uv",new Je(f,2));function _(){let v=new A,I=new A,T=0,R=(t-e)/n;for(let D=0;D<=r;D++){let S=[],M=D/r,k=M*(t-e)+e;for(let W=0;W<=s;W++){let X=W/s,L=X*c+o,F=Math.sin(L),O=Math.cos(L);I.x=k*F,I.y=-M*n+m,I.z=k*O,u.push(I.x,I.y,I.z),v.set(F,R,O).normalize(),d.push(v.x,v.y,v.z),f.push(X,1-M),S.push(g++)}x.push(S)}for(let D=0;D<s;D++)for(let S=0;S<r;S++){let M=x[S][D],k=x[S+1][D],W=x[S+1][D+1],X=x[S][D+1];(e>0||S!==0)&&(h.push(M,k,X),T+=3),(t>0||S!==r-1)&&(h.push(k,W,X),T+=3)}l.addGroup(p,T,0),p+=T}function y(v){let I=g,T=new Fe,R=new A,D=0,S=v===!0?e:t,M=v===!0?1:-1;for(let W=1;W<=s;W++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;let k=g;for(let W=0;W<=s;W++){let L=W/s*c+o,F=Math.cos(L),O=Math.sin(L);R.x=S*O,R.y=m*M,R.z=S*F,u.push(R.x,R.y,R.z),d.push(0,M,0),T.x=F*.5+.5,T.y=O*.5*M+.5,f.push(T.x,T.y),g++}for(let W=0;W<s;W++){let X=I+W,L=k+W;v===!0?h.push(L,L+1,X):h.push(L+1,L,X),D+=3}l.addGroup(p,D,v===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ao=class i extends _r{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ro=class i extends St{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new Je(r,3)),this.setAttribute("normal",new Je(r.slice(),3)),this.setAttribute("uv",new Je(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let y=new A,v=new A,I=new A;for(let T=0;T<t.length;T+=3)f(t[T+0],y),f(t[T+1],v),f(t[T+2],I),c(y,v,I,_)}function c(_,y,v,I){let T=I+1,R=[];for(let D=0;D<=T;D++){R[D]=[];let S=_.clone().lerp(v,D/T),M=y.clone().lerp(v,D/T),k=T-D;for(let W=0;W<=k;W++)W===0&&D===T?R[D][W]=S:R[D][W]=S.clone().lerp(M,W/k)}for(let D=0;D<T;D++)for(let S=0;S<2*(T-D)-1;S++){let M=Math.floor(S/2);S%2===0?(d(R[D][M+1]),d(R[D+1][M]),d(R[D][M])):(d(R[D][M+1]),d(R[D+1][M+1]),d(R[D+1][M]))}}function l(_){let y=new A;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(_),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function h(){let _=new A;for(let y=0;y<r.length;y+=3){_.x=r[y+0],_.y=r[y+1],_.z=r[y+2];let v=m(_)/2/Math.PI+.5,I=p(_)/Math.PI+.5;a.push(v,1-I)}g(),u()}function u(){for(let _=0;_<a.length;_+=6){let y=a[_+0],v=a[_+2],I=a[_+4],T=Math.max(y,v,I),R=Math.min(y,v,I);T>.9&&R<.1&&(y<.2&&(a[_+0]+=1),v<.2&&(a[_+2]+=1),I<.2&&(a[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function f(_,y){let v=_*3;y.x=e[v+0],y.y=e[v+1],y.z=e[v+2]}function g(){let _=new A,y=new A,v=new A,I=new A,T=new Fe,R=new Fe,D=new Fe;for(let S=0,M=0;S<r.length;S+=9,M+=6){_.set(r[S+0],r[S+1],r[S+2]),y.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),T.set(a[M+0],a[M+1]),R.set(a[M+2],a[M+3]),D.set(a[M+4],a[M+5]),I.copy(_).add(y).add(v).divideScalar(3);let k=m(I);x(T,M+0,_,k),x(R,M+2,y,k),x(D,M+4,v,k)}}function x(_,y,v,I){I<0&&_.x===1&&(a[y]=_.x-1),v.x===0&&v.z===0&&(a[y]=I/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var vr=class i extends Ro{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},_s=class i extends Ro{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},aa=class i extends St{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],u=e,d=(t-e)/s,f=new A,g=new Fe;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let _=p+m,y=_,v=_+n+1,I=_+n+2,T=_+1;o.push(y,v,T),o.push(v,I,T)}}this.setIndex(o),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(l,3)),this.setAttribute("uv",new Je(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var yr=class i extends St{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new A,d=new A,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let _=[],y=p/n,v=0;p===0&&a===0?v=.5/t:p===n&&c===Math.PI&&(v=-.5/t);for(let I=0;I<=t;I++){let T=I/t;u.x=-e*Math.cos(s+T*r)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(s+T*r)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(T+v,1-y),_.push(l++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<t;_++){let y=h[p][_+1],v=h[p][_],I=h[p+1][_],T=h[p+1][_+1];(p!==0||a>0)&&f.push(y,v,T),(p!==n-1||c<Math.PI)&&f.push(v,I,T)}this.setIndex(f),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ct=class extends cn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mh,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Sn=class extends Ct{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return en(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Co=class extends cn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mh,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=ih,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function $a(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function d_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function f_(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Od(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function df(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var Gi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break t}a=t.length;break n}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Wl=class extends Gi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Js,endingEnd:Js}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Qs:r=e,o=2*t-n;break;case ro:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Qs:a=e,c=2*n-t;break;case ro:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,_=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*x+.5*g,v=f*m-f*x;for(let I=0;I!==o;++I)r[I]=p*a[h+I]+_*a[l+I]+y*a[c+I]+v*a[u+I];return r}},Po=class extends Gi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},Xl=class extends Gi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},kn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$a(t,this.TimeBufferType),this.values=$a(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:$a(e.times,Array),values:$a(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Po(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Wl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case cr:t=this.InterpolantFactoryMethodDiscrete;break;case lr:t=this.InterpolantFactoryMethodLinear;break;case hc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return cr;case this.InterpolantFactoryMethodLinear:return lr;case this.InterpolantFactoryMethodSmooth:return hc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&d_(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===hc,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=lr;var Wi=class extends kn{constructor(e,t,n){super(e,t,n)}};Wi.prototype.ValueTypeName="bool";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=cr;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var Io=class extends kn{};Io.prototype.ValueTypeName="color";var Mi=class extends kn{};Mi.prototype.ValueTypeName="number";var ql=class extends Gi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)yt.slerpFlat(r,0,a,l-o,a,l,c);return r}},wn=class extends kn{InterpolantFactoryMethodLinear(e){return new ql(this.times,this.values,this.getValueSize(),e)}};wn.prototype.ValueTypeName="quaternion";wn.prototype.InterpolantFactoryMethodSmooth=void 0;var Xi=class extends kn{constructor(e,t,n){super(e,t,n)}};Xi.prototype.ValueTypeName="string";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=cr;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var En=class extends kn{};En.prototype.ValueTypeName="vector";var Qn=class{constructor(e="",t=-1,n=[],s=ph){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Wn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(m_(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(kn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=f_(c);c=Od(c,1,h),l=Od(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Mi(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,g,x){if(f.length!==0){let m=[],p=[];df(f,m,p,g),m.length!==0&&x.push(new u(d,m,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let u=0;u<l.length;u++){let d=l[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(let x in f){let m=[],p=[];for(let _=0;_!==d[g].morphTargets.length;++_){let y=d[g];m.push(y.time),p.push(y.morphTarget===x?1:0)}s.push(new Mi(".morphTargetInfluence["+x+"]",m,p))}c=f.length*a}else{let f=".bones["+t[u].name+"]";n(En,f+".position",d,"pos",s),n(wn,f+".quaternion",d,"rot",s),n(En,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function p_(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Mi;case"vector":case"vector2":case"vector3":case"vector4":return En;case"color":return Io;case"quaternion":return wn;case"bool":case"boolean":return Wi;case"string":return Xi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function m_(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=p_(i.type);if(i.times===void 0){let t=[],n=[];df(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var zi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Yl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},g_=new Yl,Si=class{constructor(e){this.manager=e!==void 0?e:g_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Si.DEFAULT_MATERIAL_NAME="__DEFAULT";var di={},jl=class extends Error{constructor(e,t){super(e),this.response=t}},oa=class extends Si{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=zi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(di[e]!==void 0){di[e].push({onLoad:t,onProgress:n,onError:s});return}di[e]=[],di[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=di[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,x=0,m=new ReadableStream({start(p){_();function _(){u.read().then(({done:y,value:v})=>{if(y)p.close();else{x+=v.byteLength;let I=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let T=0,R=h.length;T<R;T++){let D=h[T];D.onProgress&&D.onProgress(I)}p.enqueue(v),_()}},y=>{p.error(y)})}}});return new Response(m)}else throw new jl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{zi.add(e,l);let h=di[e];delete di[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=di[e];if(h===void 0)throw this.manager.itemError(e),l;delete di[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Kl=class extends Si{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=zi.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;let o=na("img");function c(){h(),zi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}};var Mr=class extends Si{constructor(e){super(e)}load(e,t,n,s){let r=new Bt,a=new Kl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Sr=class extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},wr=class extends Sr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Hc=new Ne,zd=new A,Bd=new A,ca=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ia,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;zd.setFromMatrixPosition(e.matrixWorld),t.position.copy(zd),Bd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Bd),t.updateMatrixWorld(),Hc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Hc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Zl=class extends ca{constructor(){super(new kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=hr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Lo=class extends Sr{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Zl}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Hd=new Ne,Yr=new A,Vc=new A,Jl=class extends ca{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Fe(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Yr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Yr),Vc.copy(n.position),Vc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Vc),n.updateMatrixWorld(),s.makeTranslation(-Yr.x,-Yr.y,-Yr.z),Hd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hd)}},qi=class extends Sr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Jl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ql=class extends ca{constructor(){super(new fr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Er=class extends Sr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new Ql}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Yi=class{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Do=class extends Si{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=zi.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{s&&s(l)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return zi.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),zi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});zi.add(e,c),r.manager.itemStart(e)}};var ko=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Vd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Vd(){return performance.now()}var $l=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)n[r+o]=n[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(n,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,s,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,a=s;r!==a;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,s){yt.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let a=this._workIndex*r;yt.multiplyQuaternionsFlat(e,a,e,t,e,n),yt.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,n,s,r){let a=1-s;for(let o=0;o!==r;++o){let c=t+o;e[c]=e[c]*a+e[n+o]*s}}_lerpAdditive(e,t,n,s,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[n+a]*s}}},xh="\\[\\]\\.:\\/",b_=new RegExp("["+xh+"]","g"),_h="[^"+xh+"]",x_="[^"+xh.replace("\\.","")+"]",__=/((?:WC+[\/:])*)/.source.replace("WC",_h),v_=/(WCOD+)?/.source.replace("WCOD",x_),y_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_h),M_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_h),S_=new RegExp("^"+__+v_+y_+M_+"$"),w_=["material","materials","bones","map"],eh=class{constructor(e,t,n){let s=n||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},pt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(b_,"")}static parseTrackName(e){let t=S_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);w_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pt.Composite=eh;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var th=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,a=r.length,o=new Array(a),c={endingStart:Js,endingEnd:Js};for(let l=0;l!==a;++l){let h=r[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Fp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case zp:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case ph:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,a=n===Op;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(n===fh){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){let o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=Qs,s.endingEnd=Qs):(e?s.endingStart=this.zeroSlopeAtStart?Qs:Js:s.endingStart=ro,t?s.endingEnd=this.zeroSlopeAtEnd?Qs:Js:s.endingEnd=ro)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}},E_=new Float32Array(1),vs=class extends vi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){let d=s[u],f=d.name,g=h[f];if(g!==void 0)++g.referenceCount,a[u]=g;else{if(g=a[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}let x=t&&t._propertyBindings[u].binding.parsedPath;g=new $l(pt.create(n,f,x),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),a[u]=g}o[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,a=s[t];a===void 0&&(a={},s[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Po(new Float32Array(2),new Float32Array(2),1,E_),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,a=typeof e=="string"?Qn.findByName(s,e):e,o=a!==null?a.uuid:e,c=this._actionsByClip[o],l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=ph),c!==void 0){let u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;let h=new th(this,a,t,n);return this._bindAction(h,l),this._addInactiveAction(h,o,r),h}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?Qn.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(s,e,r,a);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){let l=a[o];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let a in n){let o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");function ff(i){let e=new Map,t=new Map,n=i.clone();return pf(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function pf(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)pf(i.children[n],e.children[n],t)}function vh(i,e){if(e===ef)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ha||e===Uo){let t=i.getIndex();if(t===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===ha)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var zo=class extends Si{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ah(t)}),this.register(function(t){return new Rh(t)}),this.register(function(t){return new Fh(t)}),this.register(function(t){return new Oh(t)}),this.register(function(t){return new zh(t)}),this.register(function(t){return new Ph(t)}),this.register(function(t){return new Ih(t)}),this.register(function(t){return new Lh(t)}),this.register(function(t){return new Dh(t)}),this.register(function(t){return new Th(t)}),this.register(function(t){return new kh(t)}),this.register(function(t){return new Ch(t)}),this.register(function(t){return new Uh(t)}),this.register(function(t){return new Nh(t)}),this.register(function(t){return new wh(t)}),this.register(function(t){return new Bh(t)}),this.register(function(t){return new Hh(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Yi.extractUrlBase(e);a=Yi.resolveURL(l,this.path)}else a=Yi.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new oa(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===_f){try{a[Qe.KHR_BINARY_GLTF]=new Vh(e)}catch(u){s&&s(u);return}r=JSON.parse(a[Qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Kh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Qe.KHR_MATERIALS_UNLIT:a[u]=new Eh;break;case Qe.KHR_DRACO_MESH_COMPRESSION:a[u]=new Gh(r,this.dracoLoader);break;case Qe.KHR_TEXTURE_TRANSFORM:a[u]=new Wh;break;case Qe.KHR_MESH_QUANTIZATION:a[u]=new Xh;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function A_(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var Qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},wh=class{constructor(e){this.parser=e,this.name=Qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new we(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],sn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Er(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new qi(h),l.distance=u;break;case"spot":l=new Lo(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,wi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},Eh=class{constructor(){this.name=Qe.KHR_MATERIALS_UNLIT}getMaterialType(){return Ht}extendParams(e,t,n){let s=[];e.color=new we(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],sn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,it))}return Promise.all(s)}},Th=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Ah=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Fe(o,o)}return Promise.all(r)}},Rh=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Ch=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},Ph=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new we(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],sn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,it)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Ih=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},Lh=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new we().setRGB(o[0],o[1],o[2],sn),Promise.all(r)}},Dh=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},kh=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new we().setRGB(o[0],o[1],o[2],sn),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,it)),Promise.all(r)}},Nh=class{constructor(e){this.parser=e,this.name=Qe.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},Uh=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},Fh=class{constructor(e){this.parser=e,this.name=Qe.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Oh=class{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},zh=class{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Bh=class{constructor(e){this.name=Qe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},Hh=class{constructor(e){this.name=Qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==Nn.TRIANGLES&&l.mode!==Nn.TRIANGLE_STRIP&&l.mode!==Nn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let g of u){let x=new Ne,m=new A,p=new yt,_=new A(1,1,1),y=new Xn(g.geometry,g.material,d);for(let v=0;v<d;v++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,v),c.SCALE&&_.fromBufferAttribute(c.SCALE,v),y.setMatrixAt(v,x.compose(m,p,_));for(let v in c)if(v==="_COLOR_0"){let I=c[v];y.instanceColor=new bs(I.array,I.itemSize,I.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,c[v]);Mt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},_f="glTF",da=12,mf={JSON:1313821514,BIN:5130562},Vh=class{constructor(e){this.name=Qe.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,da),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==_f)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-da,r=new DataView(e,da),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===mf.JSON){let l=new Uint8Array(e,da+a,o);this.content=n.decode(l)}else if(c===mf.BIN){let l=da+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Gh=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=Yh[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Yh[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Ar[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let x=f.attributes[g],m=c[g];m!==void 0&&(x.normalized=m)}u(f)},o,l,sn,d)})})}},Wh=class{constructor(){this.name=Qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Xh=class{constructor(){this.name=Qe.KHR_MESH_QUANTIZATION}},Bo=class extends Gi{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,g=e*l,x=g-l,m=-2*f+3*d,p=f-d,_=1-m,y=p-d+u;for(let v=0;v!==o;v++){let I=a[x+v+o],T=a[x+v+c]*h,R=a[g+v+o],D=a[g+v]*h;r[v]=_*I+y*T+m*R+p*D}return r}},R_=new yt,qh=class extends Bo{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return R_.fromArray(r).normalize().toArray(r),r}},Nn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ar={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},gf={9728:tn,9729:pn,9984:rh,9985:Zr,9986:Zs,9987:Jn},bf={33071:mi,33648:ea,10497:xi},yh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Yh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ji={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},C_={CUBICSPLINE:void 0,LINEAR:lr,STEP:cr},Mh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function P_(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ct({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Dn})),i.DefaultMaterial}function ys(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function wi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function I_(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function L_(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function D_(i){let e,t=i.extensions&&i.extensions[Qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Sh(t.attributes):e=i.indices+":"+Sh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Sh(i.targets[n]);return e}function Sh(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function jh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function k_(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var N_=new Ne,Kh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new A_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new Mr(this.options.manager):this.textureLoader=new Do(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new oa(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return ys(r,o,s),wi(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Qe.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Yi.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=yh[s.type],o=Ar[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new Tt(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=yh[s.type],l=Ar[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,x,m;if(f&&f!==u){let p=Math.floor(d/f),_="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,y=t.cache.get(_);y||(x=new l(o,p*f,s.count*f/h),y=new mr(x,f/h),t.cache.add(_,y)),m=new ms(y,c,d%f/h,g)}else o===null?x=new l(s.count*c):x=new l(o,d,s.count*c),m=new Tt(x,c,g);if(s.sparse!==void 0){let p=yh.SCALAR,_=Ar[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,I=new _(a[1],y,s.sparse.count*p),T=new l(a[2],v,s.sparse.count*c);o!==null&&(m=new Tt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,D=I.length;R<D;R++){let S=I[R];if(m.setX(S,T[R*c]),c>=2&&m.setY(S,T[R*c+1]),c>=3&&m.setZ(S,T[R*c+2]),c>=4&&m.setW(S,T[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=gf[d.magFilter]||pn,h.minFilter=gf[d.minFilter]||Jn,h.wrapS=bf[d.wrapS]||xi,h.wrapT=bf[d.wrapT]||xi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==tn&&h.minFilter!==pn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){let m=new Bt(x);m.needsUpdate=!0,d(m)}),t.load(Yi.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),wi(u,a),u.userData.mimeType=a.mimeType||k_(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Qe.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Qe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[Qe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new xs,cn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new ra,cn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Ct}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[Qe.KHR_MATERIALS_UNLIT]){let u=s[Qe.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new we(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],sn),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,it)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Nt);let h=r.alphaMode||Mh.OPAQUE;if(h===Mh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Mh.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Ht&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Fe(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Ht&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Ht){let u=r.emissiveFactor;o.emissive=new we().setRGB(u[0],u[1],u[2],sn)}return r.emissiveTexture!==void 0&&a!==Ht&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,it)),Promise.all(l).then(function(){let u=new a(o);return r.name&&(u.name=r.name),wi(u,r),t.associations.set(u,{materials:e}),r.extensions&&ys(s,u,r),u})}createUniqueName(e){let t=pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return xf(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=D_(l),u=s[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[Qe.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=xf(new St,l,t),s[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?P_(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let x=h[f],m=a[f],p,_=l[f];if(m.mode===Nn.TRIANGLES||m.mode===Nn.TRIANGLE_STRIP||m.mode===Nn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new _o(x,_):new Ue(x,_),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Nn.TRIANGLE_STRIP?p.geometry=vh(p.geometry,Uo):m.mode===Nn.TRIANGLE_FAN&&(p.geometry=vh(p.geometry,ha));else if(m.mode===Nn.LINES)p=new wo(x,_);else if(m.mode===Nn.LINE_STRIP)p=new br(x,_);else if(m.mode===Nn.LINE_LOOP)p=new Eo(x,_);else if(m.mode===Nn.POINTS)p=new xr(x,_);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&L_(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),wi(p,r),m.extensions&&ys(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&ys(s,u[0],r),u[0];let d=new ot;r.extensions&&ys(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new kt($n.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new fr(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),wi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new Ne;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new yo(o,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],x=f.target,m=x.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,_=s.parameters!==void 0?s.parameters[g.output]:g.output;x.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",_)),l.push(g),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],x=u[3],m=u[4],p=[];for(let _=0,y=d.length;_<y;_++){let v=d[_],I=f[_],T=g[_],R=x[_],D=m[_];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();let S=n._createAnimationTracks(v,I,T,R,D);if(S)for(let M=0;M<S.length;M++)p.push(S[M])}return new Qn(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,N_)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new sa:l.length>1?h=new ot:l.length===1?h=l[0]:h=new Mt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),wi(h,r),r.extensions&&ys(n,h,r),r.matrix!==void 0){let u=new Ne;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new ot;n.name&&(r.name=s.createUniqueName(n.name)),wi(r,n),n.extensions&&ys(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof cn||d instanceof Bt)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];ji[r.path]===ji.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(ji[r.path]){case ji.weights:l=Mi;break;case ji.rotation:l=wn;break;case ji.position:case ji.scale:l=En;break;default:n.itemSize===1?l=Mi:l=En;break}let h=s.interpolation!==void 0?C_[s.interpolation]:lr,u=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){let g=new l(c[d]+"."+ji[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=jh(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof wn?qh:Bo;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function U_(i,e,t){let n=e.attributes,s=new mn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new A(c[0],c[1],c[2]),new A(l[0],l[1],l[2])),o.normalized){let h=jh(Ar[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new A,c=new A;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let x=jh(Ar[d.componentType]);c.multiplyScalar(x)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new vn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function xf(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=Yh[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return $e.workingColorSpace!==sn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${$e.workingColorSpace}" not supported.`),wi(i,e),U_(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?I_(i,e.targets,t):i})}var vf=(function(){"use strict";var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(t)?e:i,r,a=WebAssembly.instantiate(o(s),{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var _=new Uint8Array(p.length),y=0;y<p.length;++y){var v=p.charCodeAt(y);_[y]=v>96?v-97:v>64?v-39:v+4}for(var I=0,y=0;y<p.length;++y)_[I++]=_[y]<60?n[_[y]]:(_[y]-60)*64+_[++y];return _.buffer.slice(0,I)}function c(p,_,y,v,I,T){var R=r.exports.sbrk,D=y+3&-4,S=R(D*v),M=R(I.length),k=new Uint8Array(r.exports.memory.buffer);k.set(I,M);var W=p(S,y,v,M,I.length);if(W==0&&T&&T(S,D,v),_.set(k.subarray(S,S+y*v)),R(S-R(0)),W!=0)throw new Error("Malformed buffer data: "+W)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var _={object:new Worker(p),pending:0,requests:{}};return _.object.onmessage=function(y){var v=y.data;_.pending-=v.count,_.requests[v.id][v.action](v.value),delete _.requests[v.id]},_}function g(p){for(var _="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(s))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+m.toString(),y=new Blob([_],{type:"text/javascript"}),v=URL.createObjectURL(y),I=0;I<p;++I)u[I]=f(v);URL.revokeObjectURL(v)}function x(p,_,y,v,I){for(var T=u[0],R=1;R<u.length;++R)u[R].pending<T.pending&&(T=u[R]);return new Promise(function(D,S){var M=new Uint8Array(y),k=d++;T.pending+=p,T.requests[k]={resolve:D,reject:S},T.object.postMessage({id:k,count:p,size:_,source:M,mode:v,filter:I},[M.buffer])})}function m(p){a.then(function(){var _=p.data;try{var y=new Uint8Array(_.count*_.size);c(r.exports[_.mode],y,_.count,_.size,_.source,r.exports[_.filter]),self.postMessage({id:_.id,count:_.count,action:"resolve",value:y},[y.buffer])}catch(v){self.postMessage({id:_.id,count:_.count,action:"reject",value:v})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,_,y,v,I){c(r.exports.meshopt_decodeVertexBuffer,p,_,y,v,r.exports[l[I]])},decodeIndexBuffer:function(p,_,y,v){c(r.exports.meshopt_decodeIndexBuffer,p,_,y,v)},decodeIndexSequence:function(p,_,y,v){c(r.exports.meshopt_decodeIndexSequence,p,_,y,v)},decodeGltfBuffer:function(p,_,y,v,I,T){c(r.exports[h[I]],p,_,y,v,r.exports[l[T]])},decodeGltfBufferAsync:function(p,_,y,v,I){return u.length>0?x(p,_,y,h[v],l[I]):a.then(function(){var T=new Uint8Array(p*_);return c(r.exports[h[v]],T,p,_,y,r.exports[l[I]]),T})}}})();function un(i){let e=window.__ML_EMBED;return e&&e[i]||i}var F_=new zo().setMeshoptDecoder(vf),Zh={};function Ho(i){return Zh[i]||(Zh[i]=F_.loadAsync(un("assets/models/"+i+".glb"))),Zh[i]}var O_=new Mr;function ei(i,e=!0){let t=O_.load(un("assets/tex/"+i));return t.wrapS=t.wrapT=xi,t.anisotropy=4,e&&(t.colorSpace=it),t}function z_(i){for(let e of Object.keys(i.attributes)){let t=i.attributes[e];if(t.isInterleavedBufferAttribute||!(t.array instanceof Float32Array)){let n=t.count,s=t.itemSize,r=new Float32Array(n*s);for(let a=0;a<n;a++)for(let o=0;o<s;o++)r[a*s+o]=t.getComponent?t.getComponent(a,o):[t.getX(a),t.getY(a),t.getZ(a),t.getW(a)][o];i.setAttribute(e,new Tt(r,s))}}return i}async function Xt(i,{height:e,width:t}={}){let n=await Ho(i);n.scene.updateMatrixWorld(!0);let s=new mn().setFromObject(n.scene),r=s.getSize(new A),a=s.getCenter(new A),o=e?e/r.y:t?t/Math.max(r.x,r.z):1,c=new Ne().makeScale(o,o,o).multiply(new Ne().makeTranslation(-a.x,-s.min.y,-a.z)),l=[];return n.scene.traverse(h=>{if(h.isMesh){let u=z_(h.geometry.clone());u.applyMatrix4(new Ne().multiplyMatrices(c,h.matrixWorld)),u.computeBoundingSphere(),u.computeBoundingBox();let d=h.material;d.side=Dn,l.push({geometry:u,material:d})}}),{parts:l,size:r.clone().multiplyScalar(o),scale:o}}var Go=1337;function et(){return Go=Go*16807%2147483647,(Go-1)/2147483646}function Vo(i,e){let t=Math.sin(i*127.1+e*311.7)*43758.5453;return t-Math.floor(t)}function B_(i,e){let t=Math.floor(i),n=Math.floor(e),s=i-t,r=e-n,a=s*s*(3-2*s),o=r*r*(3-2*r),c=Vo(t,n),l=Vo(t+1,n),h=Vo(t,n+1),u=Vo(t+1,n+1);return c+(l-c)*a+(h-c)*o+(c-l-h+u)*a*o}function Ei(i,e,t=4){let n=0,s=.5,r=1;for(let a=0;a<t;a++)n+=s*B_(i*r,e*r),r*=2.03,s*=.5;return n}var Vt=(i,e,t)=>{let n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)},K={well:new A(0,0,0),plazaR:8.5,streamZ:i=>-24+3.2*Math.sin(i/13)+1.5*Math.sin(i/5.3+1),bridge:new A(0,0,-24+3.2*Math.sin(0)+1.5*Math.sin(1)),gate:new A(0,0,-47),entrance:new A(2,0,44),andor:new A(80,0,-70),andorR:62,andorH:95,cave:new A(40.8,0,-35.7),caveDir:new A(-.753,0,.659),storyStart:new A(20.5,0,15)};function Ms(i,e){let t=Math.hypot(i-K.andor.x,e-K.andor.z);if(t>=K.andorR)return 0;let n=1-t/K.andorR;return K.andorH*Math.pow(n,1.4)*(.85+.3*Ei(i/14+5,e/14-2,3))}var Sf=[{name:"south",w:2.85,pts:[[0,8],[.5,16],[1.6,26],[2,36],[2,46]]},{name:"north",w:2.85,pts:[[0,-8],[0,-16],[0,K.bridge.z+4.5]]},{name:"north2",w:2.85,pts:[[0,K.bridge.z-4.5],[0,-34],[0,-45.5]]},{name:"west",w:2.85,pts:[[-8,1],[-15,3.5],[-23,6],[-31,6.5],[-38,4]]},{name:"east",w:2.85,pts:[[8,-1],[15,-3],[22,-5],[26.5,-6.5]]},{name:"eastfork",w:2.85,pts:[[15,-3],[17,5],[19,13]]}],H_=[{w:1.6,pts:[[-38,4],[-44,-2],[-50,-10],[-54,-20]]},{w:1.6,pts:[[26.5,-6.5],[34,-12],[42,-14],[50,-20]]},{w:1.6,pts:[[2,30],[-8,33],[-18,36]]}],fa=[{id:"tiny",model:"small_house",h:4.6,x:-14,z:11,ry:Math.PI*.92,label:"Small House (Drive: Small_House.glb)"},{id:"small",model:"small_house",h:5.2,x:-24,z:13.5,ry:Math.PI*1,label:"Small House"},{id:"blue",model:"cottage_blue",h:5.6,x:-33,z:-2.5,ry:.05,label:"Blue Roof Cottage (Drive: Blue_Roof_Cottage.glb)"},{id:"medium",model:"cottage_green",h:4.6,x:-20,z:-4.5,ry:.15,label:"Green Roof Cottage (Drive: Green_Roof_Cottage.glb)"},{id:"moss",model:"cottage_green",h:4.9,x:12,z:12,ry:-Math.PI*.55,label:"Green Roof Cottage"},{id:"council",model:"council",h:6.6,x:32,z:-8,ry:-Math.PI*.5,label:"Council Building (Drive: Council_Building.glb)"}];function V_(i,e,t,n,s,r){let a=s-t,o=r-n,c=Math.max(0,Math.min(1,((i-t)*a+(e-n)*o)/(a*a+o*o))),l=t+c*a,h=n+c*o;return[Math.hypot(i-l,e-h),c]}function wf(i,e,t){let n=1e9;for(let s=0;s<t.length-1;s++){let[r]=V_(i,e,t[s][0],t[s][1],t[s+1][0],t[s+1][1]);n=Math.min(n,r)}return n}function Zi(i,e){let t=1e9;for(let n of Sf)t=Math.min(t,wf(i,e,n.pts)-n.w/2);return t}function Ef(i,e){let t=1e9;for(let n of H_)t=Math.min(t,wf(i,e,n.pts)-n.w/2);return t}function $h(i,e){let t=Math.hypot(i/1.15,e*.95),n=(Ei(i/40+3,e/40+7,3)-.5)*3;return n+=Vt(46,78,t)*(6+Ei(i/18,e/18,3)*10),n+=Vt(-60,-90,e)*6,n+=Ms(i,e)*Vt(4.5,16,Math.abs(e-K.streamZ(i))),n}function Wo(i,e){let t=0;for(let r of fa){let a=Math.hypot(i-r.x,e-r.z);t=Math.max(t,1-Vt(r.h*.75,r.h*1.35,a))}t=Math.max(t,1-Vt(K.plazaR,K.plazaR+4,Math.hypot(i,e)));let n=Math.hypot(i-K.gate.x,(e-K.gate.z)*1.2);t=Math.max(t,1-Vt(13,19,n));let s=Math.hypot(i-K.cave.x-K.caveDir.x*8,e-K.cave.z-K.caveDir.z*8);return t=Math.max(t,(1-Vt(4,9,s))*.7),t}function Ss(i,e){let t=K.streamZ(i);return{d:Math.abs(e-t),sz:t}}var ti=3;function Ki(i,e){let t=$h(i,e),n=Zi(i,e),s=1-Vt(.3,3.5,n),r=Math.max(s,Wo(i,e)),a=(Ei(i/7,e/7,3)-.5)*1.3+(Ei(i/2.3,e/2.3,2)-.5)*.25,o=t+a*(1-r),{d:c}=Ss(i,e),l=Math.abs(i-K.bridge.x)<3.2,h=(1-Vt(ti-.6,ti+3.5,c))*1.5;o-=h;let u=K.cave.x+K.caveDir.x*2,d=K.cave.z+K.caveDir.z*2,f=Math.hypot(i-u,e-d);if(f<15){let g=1-Vt(8.5,15,f),x=G_();o=o*(1-g)+x*g}return o}var Jh=null;function G_(){if(Jh===null){let i=K.cave.x+K.caveDir.x*12,e=K.cave.z+K.caveDir.z*12;Jh=$h(i,e)+.2}return Jh}var Qh=i=>$h(i,K.streamZ(i))-.75;function W_(){let r=new Mn(250,200,200,190);r.rotateX(-Math.PI/2),r.translate(25,0,-10);let a=r.attributes.position,o=a.count,c=new Float32Array(o*4);for(let f=0;f<o;f++){let g=a.getX(f),x=a.getZ(f);a.setY(f,Ki(g,x))}r.computeVertexNormals();let l=r.attributes.normal;for(let f=0;f<o;f++){let g=a.getX(f),x=a.getZ(f),m=1-l.getY(f),p=Zi(g,x),_=Ef(g,x),{d:y}=Ss(g,x),v=Vt(.12,.3,m)+(1-Vt(ti-.3,ti+1.2,y))*.9+Vt(6,20,Ms(g,x))*.8,I=Math.max(1-Vt(-.2,1.4,p),1-Vt(-.1,.9,_))*(.75+.25*Ei(g*.7,x*.7,2));for(let D of fa){let S=Math.hypot(g-D.x,x-D.z);I=Math.max(I,(1-Vt(D.h*.5,D.h*.95,S))*.7)}I=Math.max(I,(1-Vt(K.plazaR-1,K.plazaR+2.5,Math.hypot(g,x)))*.85);let T=Vt(.42,.62,Ei(g/9+11,x/9-4,3));v=Math.min(1,v),I=Math.min(1,I)*(1-v),T*=(1-v)*(1-I);let R=Math.max(0,1-v-I-T);c.set([R,T,I,v],f*4)}r.setAttribute("splat",new Tt(c,4));let h=new Ct({roughness:.95,metalness:0}),u={grass:ei("grass.jpg"),meadow:ei("meadow.jpg"),dirt:ei("dirt.jpg"),rock:ei("rock.jpg"),gn:ei("grass_n.jpg",!1),rn:ei("rock_n.jpg",!1)};h.onBeforeCompile=f=>{Object.assign(f.uniforms,{tG:{value:u.grass},tM:{value:u.meadow},tD:{value:u.dirt},tR:{value:u.rock}}),f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 splat; varying vec4 vSplat; varying vec3 vWp;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vSplat = splat; vWp = (modelMatrix * vec4(transformed,1.0)).xyz;`),f.fragmentShader=f.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D tG, tM, tD, tR; varying vec4 vSplat; varying vec3 vWp;
float h21(vec2 p){ return fract(sin(dot(p, vec2(41.3, 289.1))) * 43758.5); }
float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f); return mix(mix(h21(i),h21(i+vec2(1,0)),f.x),mix(h21(i+vec2(0,1)),h21(i+vec2(1,1)),f.x),f.y); }
vec3 tex2(sampler2D t, vec2 uv, float k){ vec3 a = texture2D(t, uv).rgb; vec3 b = texture2D(t, uv*0.27 + 0.31).rgb; return mix(a, b, k); }`).replace("#include <map_fragment>",`
vec2 uv = vWp.xz * 0.28; float k = smoothstep(0.3, 0.7, vn(vWp.xz*0.06));
vec3 cG = tex2(tG, uv, k) * vec3(0.92, 1.0, 0.82);
vec3 cM = tex2(tM, uv*0.8, k);
vec3 cD = tex2(tD, uv*0.9, k) * vec3(0.95, 0.88, 0.78);
vec3 cR = tex2(tR, uv*0.6, k);
vec4 w = vSplat; float noiseW = vn(vWp.xz*0.9);
w.z = clamp(w.z + (noiseW-0.5)*0.35*step(0.05,w.z), 0., 1.);
w /= max(1e-3, w.x+w.y+w.z+w.w);
vec3 col = cG*w.x + cM*w.y + cD*w.z + cR*w.w;
col *= 0.86 + 0.28*vn(vWp.xz*0.11);
col = mix(col, vec3(0.93,0.95,0.97), smoothstep(48., 62., vWp.y + (vn(vWp.xz*0.2)-0.5)*8.));
diffuseColor.rgb *= col;`)};let d=new Ue(r,h);return d.receiveShadow=!0,d.name="terrain",d}function X_(){let i=[];for(let o=-100;o<=100;o+=2)i.push(o);let e=[],t=[],n=[];i.forEach((o,c)=>{let l=K.streamZ(o),h=Qh(o),d=-(K.streamZ(o+.5)-K.streamZ(o-.5)),f=1,g=Math.hypot(d,f),x=ti+.6;if(e.push(o+d/g*-x,h,l+f/g*-x,o+d/g*x,h,l+f/g*x),t.push(o/6,0,o/6,1),c){let m=(c-1)*2;n.push(m,m+1,m+2,m+1,m+3,m+2)}});let s=new St;s.setAttribute("position",new Je(e,3)),s.setAttribute("uv",new Je(t,2)),s.setIndex(n),s.computeVertexNormals();let r=new ln({transparent:!0,depthWrite:!1,uniforms:{t:{value:0},sun:{value:new A(.5,.8,.3).normalize()}},vertexShader:"varying vec2 vUv; varying vec3 vW; void main(){ vUv=uv; vec4 w=modelMatrix*vec4(position,1.); vW=w.xyz; gl_Position=projectionMatrix*viewMatrix*w; }",fragmentShader:`uniform float t; uniform vec3 sun; varying vec2 vUv; varying vec3 vW;
float h(vec2 p){return fract(sin(dot(p,vec2(12.9,78.2)))*43758.5);} float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
void main(){ vec2 p=vW.xz*0.7; float a=n(p+vec2(t*0.9,0.)) , b=n(p*2.3-vec2(t*1.6,t*0.2)); float r=(a*0.6+b*0.4);
 vec3 V=normalize(cameraPosition-vW); vec3 N=normalize(vec3((a-0.5)*0.5,1.,(b-0.5)*0.5)); float fr=pow(1.-max(dot(V,N),0.),3.);
 vec3 deep=vec3(0.07,0.30,0.36), shallow=vec3(0.26,0.58,0.55), sky=vec3(0.72,0.86,0.95);
 float edge=min(vUv.y,1.-vUv.y); vec3 c=mix(shallow,deep,smoothstep(0.05,0.45,edge)); c=mix(c,sky,fr*0.6);
 float spec=pow(max(dot(reflect(-sun,N),V),0.),60.)*0.8; c+=spec;
 float foam=smoothstep(0.12,0.0,edge+ (r-0.5)*0.08); c=mix(c,vec3(0.92,0.97,0.95),foam*0.7);
 gl_FragColor=vec4(c, mix(0.78,0.92,fr)*smoothstep(0.0,0.05,edge)); }`}),a=new Ue(s,r);return a.renderOrder=2,a.name="stream",a}function q_(){let i=new yr(400,32,16),e=new ln({side:zt,depthWrite:!1,fog:!1,uniforms:{},vertexShader:"varying vec3 vP; void main(){ vP=position; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"varying vec3 vP; void main(){ float h=normalize(vP).y; vec3 top=vec3(0.36,0.62,0.92), hor=vec3(0.86,0.92,0.93), low=vec3(0.75,0.83,0.80); vec3 c= h>0.? mix(hor,top,pow(h,0.55)) : mix(hor,low,min(1.,-h*4.)); float s=pow(max(dot(normalize(vP),normalize(vec3(0.45,0.55,-0.7))),0.),300.); c+=vec3(1.,0.95,0.8)*s*2.; gl_FragColor=vec4(c,1.); }"}),t=new Ue(i,e);return t.name="sky",t.frustumCulled=!1,t}function Y_(){let i=new ot;i.name="mountains";let e=[{r:170,h:46,c:8363944,seed:3},{r:210,h:80,c:10335936,seed:9},{r:250,h:60,c:11979216,seed:17}];for(let t of e){let s=[],r=[],a=[],o=new we(t.c);for(let l=0;l<=160;l++){let h=l/160*Math.PI*2,u=Ei(Math.cos(h)*3+t.seed,Math.sin(h)*3,4),d=t.h*(.25+u*u*1.6),f=Math.cos(h)*t.r,g=Math.sin(h)*t.r;s.push(f,-10,g,f,d,g);let x=o.clone().lerp(new we(15660278),d>t.h*1.2?.75:.1);if(a.push(o.r,o.g,o.b,x.r,x.g,x.b),l){let m=(l-1)*2;r.push(m,m+2,m+1,m+1,m+2,m+3)}}let c=new St;c.setAttribute("position",new Je(s,3)),c.setAttribute("color",new Je(a,3)),c.setIndex(r),i.add(new Ue(c,new Ht({vertexColors:!0,side:Nt,fog:!0})))}return i}function j_(){let i=document.createElement("canvas");i.width=128,i.height=128;let e=i.getContext("2d");for(let n=0;n<46;n++){let s=8+Math.random()*112,r=2+Math.random()*3,a=50+Math.random()*75,o=(Math.random()-.5)*30,c=e.createLinearGradient(0,128,0,128-a);c.addColorStop(0,"#4f7a26"),c.addColorStop(.6,"#7fb03c"),c.addColorStop(1,"#c4e07a"),e.fillStyle=c,e.beginPath(),e.moveTo(s-r,128),e.quadraticCurveTo(s+o*.4,128-a*.6,s+o,128-a),e.quadraticCurveTo(s+o*.4+r*.3,128-a*.6,s+r,128),e.fill()}let t=new hn(i);return t.colorSpace=it,t}function K_(){let i=document.createElement("canvas");i.width=128,i.height=128;let e=i.getContext("2d"),t=["#f4f1e8","#f7d24a","#c58be8","#f08bb0","#8fb8f5"];for(let s=0;s<9;s++){let r=12+Math.random()*104,a=40+Math.random()*60;e.strokeStyle="#3e7a28",e.lineWidth=2.5,e.beginPath(),e.moveTo(r,128),e.lineTo(r+(Math.random()-.5)*10,128-a),e.stroke(),e.fillStyle=t[s%t.length];for(let o=0;o<5;o++){let c=o/5*Math.PI*2;e.beginPath(),e.ellipse(r+Math.cos(c)*5,128-a+Math.sin(c)*5,4.5,3,c,0,Math.PI*2),e.fill()}e.fillStyle="#f2b632",e.beginPath(),e.arc(r,128-a,3,0,7),e.fill()}let n=new hn(i);return n.colorSpace=it,n}var eu={value:0};function yf(i,e){let t=new Mn(i,e);t.translate(0,e/2,0);let n=t.clone().rotateY(Math.PI/2),s=t.clone().rotateY(Math.PI/4),r=new St,a=[t,n,s],o=[],c=[],l=[],h=[],u=0;for(let d of a){o.push(...d.attributes.position.array),c.push(...d.attributes.uv.array);for(let f=0;f<d.attributes.position.count;f++)l.push(0,1,0);h.push(...Array.from(d.index.array,f=>f+u)),u+=d.attributes.position.count}return r.setAttribute("position",new Je(o,3)),r.setAttribute("uv",new Je(c,2)),r.setAttribute("normal",new Je(l,3)),r.setIndex(h),r}function Mf(i){let e=new Co({map:i,alphaTest:.5,side:Nt});return e.onBeforeCompile=t=>{t.uniforms.uWind=eu,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
uniform float uWind;`).replace("#include <begin_vertex>",`#include <begin_vertex>
 vec4 ip = instanceMatrix * vec4(0.,0.,0.,1.); float sway = sin(uWind*1.7 + ip.x*0.35 + ip.z*0.27)*0.12 + sin(uWind*3.1 + ip.x)*0.04; transformed.x += sway * position.y; transformed.z += sway*0.6*position.y;`),t.fragmentShader=t.fragmentShader.replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
#ifdef DOUBLE_SIDED
normal *= faceDirection;
#endif`)},e}var Pr=[];function Rr(i,e,t){Pr.push({x:i,z:e,r:t})}function Cr(i,e,t,n,s){let r=Math.cos(s),a=Math.sin(s),o=t>n,c=(o?t:n)-Math.min(t,n),l=Math.min(t,n),h=o?-c:0,u=o?0:-c,d=-h,f=-u;Pr.push({seg:[i+h*r+u*a,e-h*a+u*r,i+d*r+f*a,e-d*a+f*r],r:l})}function qn(i,e,t=!0,n=28){let s=[],r=new Map,a=new A;for(let o of e){a.setFromMatrixPosition(o);let c=Math.floor(a.x/n)+","+Math.floor(a.z/n);r.has(c)||r.set(c,[]),r.get(c).push(o)}for(let o of r.values())for(let c of i.parts){let l=new Xn(c.geometry,c.material,o.length);o.forEach((h,u)=>l.setMatrixAt(u,h)),l.instanceMatrix.needsUpdate=!0,l.castShadow=t,l.receiveShadow=!0,l.computeBoundingSphere(),s.push(l)}return s}function At(i,e,t,n=0,s=1,r=0,a=0){let o=new yt().setFromEuler(new nn(r,n,a,"YXZ"));return new Ne().compose(new A(i,e,t),o,new A(s,s,s))}async function Tf(i,e){Go=1337,Pr.length=0;let t={group:new ot,updates:[],heightAt:Ki,props:{}},n=t.group;i.add(n),n.add(q_()),n.add(Y_());let s=W_();n.add(s),t.terrain=s;let r=X_();n.add(r),t.updates.push(b=>r.material.uniforms.t.value=b);let[a,o,c,l,h,u,d,f,g,x,m,p,_,y]=await Promise.all([Xt("path_straight",{width:2.85}),Xt("path_curved",{width:6.2}),Xt("well",{height:3.6}),Promise.resolve(null),Xt("wall_b4",{width:4.2}),Xt("rock_b4",{width:3}),Xt("pebble",{width:1}),Xt("evergreen_b4",{height:9}),null,null,Xt("signpost_b4",{height:2.3}),null,null,Xt("castle_gate_b4",{height:16})]),v={};for(let b of[...new Set(fa.map(C=>C.model))])v[b]=await Xt(b,{height:1});let I=[],T=a.size,R=(b,C)=>Ki(b,C);function D(b,C,V,G,j,oe=0,te=null){let re=T.x*j*.5,qe=Math.atan2(-G,V),se=te?te(C-G*re):R(b-V*re,C-G*re),de=te?te(C+G*re):R(b+V*re,C+G*re),Ce=te?te(C):R(b,C),ke=Math.atan2(de-se,2*re),pe=Math.max((se+de)/2,Ce-.04)-T.y*j*.5+.06+oe,Ye=et()<.5;I.push(At(b,pe,C,qe+(Ye?Math.PI:0),j*(1+et()*.03),0,Ye?-ke:ke))}function S(b,C){let V=C/T.z,G=T.x*V*.9,j=0;for(let oe=0;oe<b.length-1;oe++){let[te,re]=b[oe],[qe,se]=b[oe+1],de=Math.hypot(qe-te,se-re),Ce=(qe-te)/de,ke=(se-re)/de,pe=oe===0?0:j;for(;pe<=de;pe+=G){let Ye=te+Ce*pe,Be=re+ke*pe;Math.hypot(Ye,Be)<K.plazaR-1.2||D(Ye,Be,Ce,ke,V,et()*.01)}j=pe-de}}for(let b of Sf)S(b.pts,b.w);{let C=T.x*1*.92,V=T.z*1*.66;for(let G=-7;G<=7;G++)for(let j=-5;j<=5;j++){let oe=(j+(G&1?.5:0))*C,te=G*V,re=Math.hypot(oe,te);re>K.plazaR-.4||re<2.4||D(oe,te,1,0,1,(G&1)*.012+et()*.006)}}let M=K.bridge.z,k=Ki(0,M-5.6),W=Ki(0,M+5.6),X=b=>{let C=Math.min(1,Math.max(0,(b-(M-5.6))/11.2));return k+(W-k)*C+Math.sin(Math.PI*C)*Math.max(.9,Qh(0)+1.5-Math.min(k,W))};{let b=3.5/T.z,C=T.x*b*.85;for(let V=M-5.6+T.x*b*.5-.3;V<=M+5.6-T.x*b*.5+.31;V+=C)D(0,V,0,1,b,0,X)}t.bridge={z0:M-5.6,z1:M+5.6,deckY:X},n.add(...qn(a,I,!1));let L=o.size,F=(b,C,V)=>R(b,C)-L.y*V*.5+.08,O=[At(0,F(0,0,1),0,0,1)];O.push(At(-7.6,F(-7.6,2.4,.5),2.4,-.6,.5),At(7.6,F(7.6,-2.4,.5),-2.4,Math.PI-.6,.5)),n.add(...qn(o,O,!1));let Z=[At(0,R(0,-.3)+.08,-.3,Math.PI*.08,1)];n.add(...qn(c,Z)),Rr(0,-.3,1.9),t.props.well=new A(0,R(0,0),0);let H=[];for(let b of fa){let C=v[b.model],V=b.h,G=R(b.x,b.z)-.15;for(let te of C.parts){let re=new Ue(te.geometry,te.material);re.position.set(b.x,G,b.z),re.rotation.y=b.ry,re.scale.setScalar(V),re.castShadow=re.receiveShadow=!0,re.name=b.id,n.add(re)}let j=C.size.x*V/2*.86,oe=C.size.z*V/2*.86;Cr(b.x,b.z,j,oe,b.ry),H.push(b)}t.buildings=H;let $=R(K.gate.x,K.gate.z)-.1,ie=new ot;for(let b of y.parts){let C=new Ue(b.geometry,b.material);C.castShadow=C.receiveShadow=!0,ie.add(C)}let le=K.gate.z-y.size.z*.45;ie.position.set(K.gate.x,$,le),ie.rotation.y=0,n.add(ie),t.gate=ie;let _e=y.size.x/2;Cr(K.gate.x-_e*.62,le,_e*.38,y.size.z*.45,0),Cr(K.gate.x+_e*.62,le,_e*.38,y.size.z*.45,0),t.gateSize=y.size.clone(),t.gateZ=le;let Oe=[],Q=[];for(let b of H){if(b.id==="council")continue;let C=Math.cos(b.ry),V=Math.sin(b.ry),G=b.h*.95;for(let qe of[-1,1]){let se=qe*G,de=-G*.15,Ce=b.x+se*C+de*V,ke=b.z-se*V+de*C;Oe.push(At(Ce,R(Ce,ke)-.05,ke,b.ry+Math.PI/2,.85+et()*.15)),Cr(Ce,ke,.4,1.8,b.ry+Math.PI/2)}let j=b.x-Math.sin(b.ry)*-G*.9,oe=b.z-Math.cos(b.ry)*-G*.9,te=j,re=oe;Oe.push(At(te,R(te,re)-.05,re,b.ry,.9)),Cr(te,re,1.8,.4,b.ry)}for(let b of[-1,1])for(let C of[-2.6,2.6]){let V=b*1.9,G=M+C;Oe.push(At(V,X(G)-.25,G,Math.PI/2,.62))}Pr.push({seg:[-1.9,M-5,-1.9,M+5],r:.3},{seg:[1.9,M-5,1.9,M+5],r:.3});for(let b=0;b<Math.PI*2;b+=Math.PI/6){let C=Math.cos(b)*(K.plazaR+1.6),V=Math.sin(b)*(K.plazaR+1.6);Zi(C,V)<1.8||et()<.35||(Oe.push(At(C,R(C,V)-.1,V,-b+Math.PI/2,.75)),Cr(C,V,1.6,.35,-b+Math.PI/2))}n.add(...qn((e.low,h),Oe));{let b=[],V=h.size.x*2.6*.92,G=K.gate.z-2;for(let j of[-1,1])for(let oe=_e*.92+V/2;oe<62;oe+=V){let te=K.gate.x+j*oe;Ms(te,G)>2.5||(b.push(At(te,R(te,G)-.4,G,0,2.6)),b.push(At(te,R(te,G)-.4+h.size.y*2.6*.85,G,Math.PI,2.6)))}n.add(...qn(h,b)),Pr.push({seg:[-64,G,K.gate.x-_e*.8,G],r:.9},{seg:[K.gate.x+_e*.8,G,64,G],r:.9}),t.castleWallZ=G}let ne=[],be=[],ce=[],Se=(b,C,V=3.2)=>Ms(b,C)<14&&Math.hypot(b-K.storyStart.x,C-K.storyStart.z)>10&&Math.hypot(b-K.storyStart.x-6,C-K.storyStart.z+5)>6&&Math.hypot(b-K.cave.x-K.caveDir.x*9,C-K.cave.z-K.caveDir.z*9)>6&&Math.hypot(b-K.cave.x,C-K.cave.z)>9&&Zi(b,C)>V&&Ef(b,C)>1.5&&Ss(b,C).d>ti+1.8&&Wo(b,C)<.05&&Math.hypot(b-K.gate.x,C-K.gate.z)>13&&Math.hypot(b,C)>K.plazaR+3;for(let[b,C]of[[-11,-8],[10,7.5],[-9,15],[7,-13]])Se(b,C,2.5)&&(ne.push(At(b,R(b,C)-.2,C,et()*6,.9+et()*.25)),Rr(b,C,.7));let Ee=0;for(;be.length<(e.low?26:44)&&Ee++<4e3;){let b=et()*Math.PI*2,C=22+et()*30,V=Math.cos(b)*C*1.15,G=Math.sin(b)*C;Se(V,G)&&(be.some(j=>{let oe=new A().setFromMatrixPosition(j);return Math.hypot(oe.x-V,oe.z-G)<4.2})||(be.push(At(V,R(V,G)-.2,G,et()*6,.75+et()*.55)),Rr(V,G,.7)))}for(Ee=0;ce.length<(e.low?110:190)&&Ee++<8e3;){let b=et()*Math.PI*2,C=52+et()*40,V=Math.cos(b)*C*1.1,G=Math.sin(b)*C*.95;Se(V,G)&&(Math.abs(V)<9&&G<-40||(ce.push(At(V,R(V,G)-.3,G,et()*6,.8+et()*.6)),C<60&&Rr(V,G,.8)))}n.add(...qn(f,ne),...qn(f,be));let We=Array.from({length:8},()=>[]);for(let b of ce){let C=new A().setFromMatrixPosition(b);We[Math.floor((Math.atan2(C.z,C.x)+Math.PI)/(Math.PI*2)*8)%8].push(b)}for(let b of We)b.length&&n.add(...qn(f,b,!e.low));let ut=[],Ke=[],Et=[[-6,22],[9,26],[-17,-14],[14,-16],[-42,12],[38,4],[-8,K.streamZ(-8)+4.8],[9,K.streamZ(9)-4.6],[22,K.streamZ(22)+4.9],[-25,K.streamZ(-25)-4.7],[-28,22],[24,18],[-6,-38],[8,-36]];for(let[b,C]of Et){let V=.7+et()*.7;ut.push(At(b,R(b,C)-.25*V,C,et()*6,V)),Rr(b,C,1.1*V)}for(Ee=0;Ke.length<(e.low?60:140)&&Ee++<3e3;){let b=(et()-.5)*120,C=(et()-.5)*110;if(Ms(b,C)>2.5||Zi(b,C)<.4||Wo(b,C)>.5||!(Ss(b,C).d<ti+3)&&et()<.5)continue;let G=.25+et()*.5;Ke.push(At(b,R(b,C)-.06,C,et()*6,G))}let U=30.5,Zt=Qh(U)+.22;K.ford=new A(U,0,K.streamZ(U)),t.ford=K.ford,t.fordY=Zt;for(let b=-3;b<=3;b++){let C=K.streamZ(U)+b*1.15,V=U+b%2*.3;ut.push(At(V,Zt-.62,C,b*1.3,.5))}n.add(...qn(u,ut),...qn(d,Ke,!1));let Ze=[At(3.6,R(3.6,40),40,Math.PI*.1),At(-6.6,R(-6.6,4.2),4.2,.6),At(3.4,R(3.4,-K.plazaR-1),-K.plazaR-1,Math.PI),At(17.2,R(17.2,-1),-1,-.4)];n.add(...qn(m,Ze));for(let b of Ze){let C=new A().setFromMatrixPosition(b);Rr(C.x,C.z,.45)}let Xe=[],Le=[],dt=e.low?2600:6500;for(Ee=0;Xe.length<dt&&Ee++<dt*4;){let b=(et()-.5)*150,C=(et()-.5)*140,V=Zi(b,C);if(V<.1||Ms(b,C)>2.5||Ss(b,C).d<ti-.4||Wo(b,C)>.6&&et()<.8||!(V<2.5?1:0)&&et()<.35)continue;let j=.5+et()*.7;Xe.push(At(b,R(b,C)-.05,C,et()*6,j))}for(Ee=0;Le.length<(e.low?500:1300)&&Ee++<2e4;){let b=(et()-.5)*110,C=(et()-.5)*100;if(Ms(b,C)>2.5)continue;let V=Zi(b,C),G=fa.some(oe=>{let te=Math.hypot(b-oe.x,C-oe.z);return te>oe.h*.6&&te<oe.h*1.4}),j=Math.abs(Math.hypot(b,C)-(K.plazaR+1))<1.4;(G||j||V>.3&&V<1.8&&et()<.3||Ei(b/6,C/6,2)>.66)&&(V<.15||Ss(b,C).d<ti||Le.push(At(b,R(b,C)-.03,C,et()*6,.45+et()*.4)))}let De=new Xn(yf(1.1,.7),Mf(j_()),Xe.length);Xe.forEach((b,C)=>De.setMatrixAt(C,b)),De.receiveShadow=!0;let P=new Xn(yf(.9,.7),Mf(K_()),Le.length);return Le.forEach((b,C)=>P.setMatrixAt(C,b)),De.computeBoundingSphere(),P.computeBoundingSphere(),n.add(De,P),t.bounds={rx:70,rz:66},t.blockedByStream=(b,C)=>{let{d:V}=Ss(b,C);return V<ti+.2&&Math.abs(b-K.bridge.x)>1.5},t.groundAt=(b,C)=>Math.abs(b-U)<1.3&&Math.abs(C-K.streamZ(U))<4.2?Math.max(Ki(b,C),Zt):C>t.bridge.z0&&C<t.bridge.z1&&Math.abs(b)<1.7?Math.max(Ki(b,C),t.bridge.deckY(C)+.02):Math.max(Ki(b,C),-50),t.colliders=Pr,t.roadDist=Zi,t.stats={tiles:I.length,curved:O.length,walls:Oe.length,trees:ne.length+be.length+ce.length,rocks:ut.length,pebbles:Ke.length,grass:Xe.length,flowers:Le.length},t}var rn=new yt,Ji=new yt;function Z_(i){let e=i.length/4,t=new tt,n=new yt(i[0],i[1],i[2],i[3]);for(let s=0;s<e;s++)rn.fromArray(i,s*4),rn.dot(n)<0&&(rn.x*=-1,rn.y*=-1,rn.z*=-1,rn.w*=-1),t.x+=rn.x,t.y+=rn.y,t.z+=rn.z,t.w+=rn.w;return new yt(t.x,t.y,t.z,t.w).normalize()}function J_(i){let e=i.length/3,t=new A;for(let n=0;n<e;n++)t.x+=i[n*3],t.y+=i[n*3+1],t.z+=i[n*3+2];return t.divideScalar(e)}var Af=/Spine|Neck|Head/,Q_=/UpLeg|Leg|Foot|Toe/,Rf=/Shoulder|Arm|Hand/;function Cf(i,e,t=null){let n=t||i,s={};e.traverse(_=>{_.isBone&&(s[_.name]={q:_.quaternion.clone(),p:_.position.clone()})});let r=_=>_.name.split(".")[0],a={};for(let _ of n.tracks)_.name.endsWith(".quaternion")?a[_.name]=Z_(_.values):_.name.endsWith(".position")&&(a[_.name]=J_(_.values));let o=[],c=3.2,l=[0,c/2,c];for(let _ of n.tracks){let y=r(_);if(_.name.endsWith(".quaternion")){let v=a[_.name].clone();Af.test(y)&&s[y]&&v.slerp(s[y].q,t?.3:.6),/ForeArm/.test(y)&&s[y]&&v.slerp(s[y].q,.35);let I=[];for(let T=0;T<3;T++)Ji.copy(v),/Spine2/.test(y)&&T===1&&(rn.setFromAxisAngle(new A(1,0,0),-.035),Ji.multiply(rn)),I.push(Ji.x,Ji.y,Ji.z,Ji.w);o.push(new wn(_.name,l,I))}else if(_.name.endsWith(".position")&&/Hips/.test(y)){let v=a[_.name];o.push(new En(_.name,l,[v.x,v.y,v.z,v.x,v.y+.006,v.z,v.x,v.y,v.z]))}}let h=new Qn(t?"Idle (derived from Walking average pose)":"Idle (derived)",c,o),u=1.05,d=u/i.duration,f=[];for(let _ of i.tracks){let y=r(_),v=Array.from(_.times,I=>I*d);if(_.name.endsWith(".quaternion")){let I=a[_.name].clone();Af.test(y)&&s[y]&&I.slerp(s[y].q,.55);let T=Q_.test(y)?.5:Rf.test(y)?.38:.45,R=new Float32Array(_.values.length);for(let D=0;D<_.values.length/4;D++)rn.fromArray(_.values,D*4),Ji.copy(I).slerp(rn,T),Ji.toArray(R,D*4);f.push(new wn(_.name,v,R))}else if(_.name.endsWith(".position")&&/Hips/.test(y)){let I=a[_.name],T=new Float32Array(_.values.length);for(let R=0;R<_.values.length/3;R++)T[R*3]=I.x+(_.values[R*3]-I.x)*.4,T[R*3+1]=I.y+.02+(_.values[R*3+1]-I.y)*.35,T[R*3+2]=I.z+(_.values[R*3+2]-I.z)*.4;f.push(new En(_.name,v,T))}}let g=t||new Qn("Walk (derived from Running)",u,f),x=[0,.1,.24,.5],m=[];for(let _ of o){let y=r(_);if(_.name.endsWith(".quaternion")){let v=new yt().fromArray(_.values,0),I=v.clone();Rf.test(y)&&s[y]&&I.slerp(s[y].q,/Hand/.test(y)?.5:.85),/Spine1|Spine2/.test(y)&&(rn.setFromAxisAngle(new A(1,0,0),-.12),I.multiply(rn)),m.push(new wn(_.name,x,[...v.toArray(),...I.toArray(),...I.toArray(),...v.toArray()]))}else{let v=Array.from(_.values.slice(0,3)),I=[v[0],v[1]+.03,v[2]];m.push(new En(_.name,x,[...v,...I,...I,...v]))}}let p=new Qn("Attack star-burst (derived pose blend)",.5,m);return{idle:h,walk:g,run:i,attack:p}}function qo(i,e,t=["mixamorigLeftToeBase","mixamorigRightToeBase"]){let n=new vs(i),s=n.clipAction(e);s.play();let r=t.map(f=>i.getObjectByName(f)).filter(Boolean);r.length<2&&(r=["mixamorigLeftFoot","mixamorigRightFoot"].map(f=>i.getObjectByName(f)).filter(Boolean));let a=120,o=r.map(()=>[]),c=new Ne;for(let f=0;f<a;f++)n.setTime(e.duration*f/a),i.updateMatrixWorld(!0),c.copy(i.matrixWorld).invert(),r.forEach((g,x)=>o[x].push(g.getWorldPosition(new A).applyMatrix4(c)));let l=1/0,h=e.duration/a,u=[];for(let f of o){let g=f.map(_=>_.y),x=Math.min(...g),m=Math.max(...g);l=Math.min(l,x);let p=x+.12*(m-x);for(let _=0;_<a;_++){let y=f[_],v=f[(_+a-1)%a];y.y<p&&v.y<p&&u.push(-(y.z-v.z)/h)}}u.sort((f,g)=>f-g);let d=u.length?u[Math.floor(u.length/2)]:0;return s.stop(),n.uncacheRoot(i),{speed:d,minFootY:l}}var Xo=class{constructor(e,t,n,s){this.mixer=new vs(e),this.clips=t,this.scale=s,this.natural={walk:n.walk*s,run:n.run*s},this.actions={};for(let r of["idle","walk","run","attack"])this.actions[r]=this.mixer.clipAction(t[r]);this.actions.attack.setLoop(fh,1),this.actions.attack.clampWhenFinished=!1,this.state="idle",this.actions.idle.play(),this.attacking=0,this.mixer.addEventListener("finished",r=>{r.action===this.actions.attack&&(this.attacking=0,this.fadeTo(this.state,.18,!0))})}fadeTo(e,t=.2,n=!1){let s=this.actions[e],r=this._current||"idle",a=this.actions[r];!n&&r===e||(s.reset().setEffectiveWeight(1).play(),a&&a!==s&&a.crossFadeTo(s,t,!1),this._current=e)}attack(){if(this.attacking)return!1;this.attacking=1;let e=this.actions.attack;return e.reset().setEffectiveTimeScale(1).setEffectiveWeight(1).play(),this.actions[this._current||"idle"].crossFadeTo(e,.08,!1),this._current="attack",!0}update(e,t){let n=this.natural.walk,s=this.natural.run,r="idle";t>.25&&(r=t>(n+s)*.5?"run":"walk"),this.state=r,this.speed=t,this.timeScale=r==="idle"?1:this.actions[r].getEffectiveTimeScale(),this.attacking||this.fadeTo(r,r==="idle"?.25:.2);let a=this.clipNatural||this.natural;r==="walk"&&this.actions.walk.setEffectiveTimeScale($n.clamp(t/a.walk,.5,1.8)),r==="run"&&this.actions.run.setEffectiveTimeScale($n.clamp(t/a.run,.6,1.7)),this.mixer.update(e)}};var $_=class{constructor(i=50331648,e="voice-engine-v1"){this.maxBytes=i,this.cacheName=e,this.mem=new Map,this.bytes=0}get persistentAvailable(){return typeof caches<"u"&&globalThis.isSecureContext!==!1}key(i){return"https://voice-engine.cache/"+encodeURIComponent(i)}async get(i){let e=this.mem.get(i);if(e)return this.mem.delete(i),this.mem.set(i,e),e;if(!this.persistentAvailable)return null;try{let n=await(await caches.open(this.cacheName)).match(this.key(i));if(!n)return null;let s=JSON.parse(decodeURIComponent(n.headers.get("x-voice-meta")||"%7B%7D")),r=await n.blob();return this.putMem(i,r,s),{blob:r,meta:s}}catch{return null}}async put(i,e,t){if(this.putMem(i,e,t),!!this.persistentAvailable)try{await(await caches.open(this.cacheName)).put(this.key(i),new Response(e,{headers:{"content-type":e.type,"x-voice-meta":encodeURIComponent(JSON.stringify(t))}}))}catch{}}putMem(i,e,t){for(this.mem.has(i)&&(this.bytes-=this.mem.get(i).blob.size,this.mem.delete(i)),this.mem.set(i,{blob:e,meta:t}),this.bytes+=e.size;this.bytes>this.maxBytes&&this.mem.size>1;){let[n,s]=this.mem.entries().next().value;this.mem.delete(n),this.bytes-=s.blob.size}}stats(){return{entries:this.mem.size,bytes:this.bytes,persistent:this.persistentAvailable}}async clear(){if(this.mem.clear(),this.bytes=0,this.persistentAvailable)try{await caches.delete(this.cacheName)}catch{}}};function Lf(i,e,t=.05){let n=[],s=/\S+/g,r;for(;r=s.exec(i);)n.push({w:r[0],char:r.index});let a=u=>u.length+(/[.!?]$/.test(u)?6:/[,;:]$/.test(u)?3:0)+1,o=n.reduce((u,d)=>u+a(d.w),0)||1,c=Math.max(0,e-t-.1),l=t,h=n.map(u=>{let d=c*a(u.w)/o,f={w:u.w,start:+l.toFixed(3),end:+(l+d*.85).toFixed(3),char:u.char};return l+=d,f});return{words:h,cues:tv(i,h)}}function ev(i){return i.trim().split(new RegExp("(?<=[.!?])\\s+")).filter(Boolean)}function tv(i,e){let t=[],n=0;for(let s of ev(i)){let r=s.split(/\s+/).filter(Boolean).length,a=e.slice(n,n+r);n+=r,a.length&&t.push({text:s,start:a[0].start,end:a[a.length-1].end})}return t}function pa(i){return i.toLowerCase().replace(/[^a-z0-9' ]+/g," ").replace(/\s+/g," ").trim()}function nv(i,e){return!i||/^([a-z]+:|\/)/i.test(e)?e:i.replace(/\/?$/,"/")+e}function iv(i,e){let t=new ArrayBuffer(44+i.length*2),n=new DataView(t),s=(r,a)=>{for(let o=0;o<a.length;o++)n.setUint8(r+o,a.charCodeAt(o))};s(0,"RIFF"),n.setUint32(4,36+i.length*2,!0),s(8,"WAVE"),s(12,"fmt "),n.setUint32(16,16,!0),n.setUint16(20,1,!0),n.setUint16(22,1,!0),n.setUint32(24,e,!0),n.setUint32(28,e*2,!0),n.setUint16(32,2,!0),n.setUint16(34,16,!0),s(36,"data"),n.setUint32(40,i.length*2,!0);for(let r=0;r<i.length;r++){let a=Math.max(-1,Math.min(1,i[r]));n.setInt16(44+r*2,a<0?a*32768:a*32767,!0)}return new Blob([t],{type:"audio/wav"})}var Ti=()=>typeof performance<"u"?performance.now():Date.now();function Pf(i,e,t="timeout"){return new Promise((n,s)=>{let r=setTimeout(()=>s(new Error(t)),e);i.then(a=>{clearTimeout(r),n(a)},a=>{clearTimeout(r),s(a)})})}var sv=class{constructor(){this.id="prerendered",this.byId=new Map,this.byText=new Map}register(i,e=""){let t=e||i.base||"";for(let n of i.lines){let s={line:n,base:t};this.byId.set(n.id,s),this.byId.set(`${i.scene}:${n.id}`,s),this.byText.set(`${n.voice}|${pa(n.text)}`,s),this.byText.set(`@${n.character}|${pa(n.text)}`,s)}}lookup(i){if(i.lineId)return i.scene&&this.byId.get(`${i.scene}:${i.lineId}`)||this.byId.get(i.lineId);if(!i.text)return;let e=pa(i.text);for(let t of i.voices||[]){let n=this.byText.get(`${t}|${e}`);if(n)return n}return i.character?this.byText.get(`@${i.character}|${e}`):void 0}async prepare(i){let e=this.lookup(i);return!e||i.voice&&i.voice!==e.line.voice||i.text&&pa(i.text)!==pa(e.line.text)?null:{provider:this.id,voice:e.line.voice,text:e.line.text,url:nv(e.base,e.line.src),duration:e.line.duration,words:e.line.words,cues:e.line.cues,timingMethod:e.line.timing?.method||"prerendered"}}get size(){return this.byId.size}},rv=class{constructor(i,e){this.o=i,this.cache=e,this.id="kokoro-browser",this.tts=null,this.loading=null}get ready(){return!!this.tts}get mode(){return this.o.mode||"if-ready"}set mode(i){this.o.mode=i}warmup(){return this.tts?Promise.resolve(this.tts):(this.loading||(this.loading=(async()=>{let i=Ti();globalThis.KOKORO_VOICE_BASE=this.o.voiceBase.replace(/\/?$/,"/");let e=await import(this.o.moduleUrl);e.env.wasmPaths=this.o.wasmPaths.replace(/\/?$/,"/");let t=e.transformersEnv;try{let n=t.backends.onnx.wasm;n.numThreads=this.o.numThreads??Math.min(4,globalThis.navigator?.hardwareConcurrency||1)}catch{}return t.allowRemoteModels=!1,t.allowLocalModels=!0,t.localModelPath=this.o.modelBase.replace(/\/?$/,"/"),this.tts=await e.KokoroTTS.from_pretrained(this.o.modelId||"kokoro",{dtype:this.o.dtype||"q8",device:this.o.device||"wasm",progress_callback:this.o.onProgress}),this.loadMs=Ti()-i,this.tts})().catch(i=>{throw this.loading=null,i})),this.loading)}async prepare(i,e){let t=i.voices.find(g=>g.startsWith("kokoro-"));if(!t||this.mode==="off"||!this.tts&&this.mode==="if-ready")return null;let n=`kokoro|${t}|${i.rate}|${i.text}`,s=await this.cache.get(n);if(s)return{provider:this.id,voice:t,text:i.text,url:URL.createObjectURL(s.blob),...s.meta,bakedRate:i.rate};let r=await this.warmup();if(e.aborted)return null;let a=Ti(),o=await r.generate(i.text,{voice:t.slice(7),speed:i.rate});this.lastGenMs=Ti()-a;let c=o.audio,l=o.sampling_rate,h=c.length/l,u=Lf(i.text,h),d=iv(c,l),f={duration:h,words:u.words,cues:u.cues,timingMethod:"estimated"};return await this.cache.put(n,d,f),{provider:this.id,voice:t,text:i.text,url:URL.createObjectURL(d),...f,bakedRate:i.rate}}},av=class{constructor(i){this.o=i,this.id="server",this.healthy=null,this.checkedAt=0}async available(){if(this.healthy!==null&&Date.now()-this.checkedAt<(this.o.healthTtlMs??15e3))return this.healthy;try{let i=await Pf(fetch(this.o.url.replace(/\/$/,"")+"/api/health"),1200);this.healthy=i.ok}catch{this.healthy=!1}return this.checkedAt=Date.now(),this.healthy}async prepare(i,e){if(!await this.available())return null;let t=this.o.url.replace(/\/$/,"");for(let n of i.voices){let s=new URLSearchParams({voice:n,text:i.text,rate:String(i.rate)}),r=await Pf(fetch(`${t}/api/tts?${s}`,{signal:e}),this.o.timeoutMs??2e4);if(r.status===404)continue;if(!r.ok)throw new Error("server "+r.status);let a=await r.json();return{provider:this.id,voice:n,text:i.text,url:t+a.audio,duration:a.duration,words:a.words,cues:a.cues,timingMethod:a.timing||"server",bakedRate:i.rate}}return null}},If=/female|woman|samantha|victoria|karen|moira|tessa|serena|kate|susan|zira|hazel|libby|sonia|fiona|martha|catherine|google uk english female/i,ov=/male|daniel|alex|fred|oliver|arthur|george|ryan|thomas|david|mark|james|rishi|google uk english male/i,cv=class{constructor(){this.id="webspeech"}get supported(){return typeof speechSynthesis<"u"&&typeof SpeechSynthesisUtterance<"u"}voices(){return this.supported?speechSynthesis.getVoices():[]}pickVoice(i="en-GB",e,t=[]){let n=this.voices().filter(r=>r.lang.replace("_","-").toLowerCase().startsWith("en")),s=r=>(r.lang.replace("_","-").toLowerCase()===i.toLowerCase()?4:0)+(t.some(a=>r.name.toLowerCase().includes(a.toLowerCase()))?8:0)+(e==="female"&&If.test(r.name)?2:0)+(e==="male"&&ov.test(r.name)&&!If.test(r.name)?2:0)+(r.localService?1:0);return n.sort((r,a)=>s(a)-s(r))[0]}async prepare(i){if(!this.supported)return null;let e=i.webSpeech||{},t=this.pickVoice(e.lang,e.gender,e.nameHints),n=Lf(i.text,i.text.length/14/i.rate);return{provider:this.id,voice:"webspeech:"+(t?.name||"default"),text:i.text,webSpeech:{lang:e.lang||t?.lang,voiceName:t?.name,pitch:e.pitch??1,rate:i.rate},words:n.words,cues:n.cues,timingMethod:"boundary-events"}}},lv={instruction:5,dialogue:5,narration:5,bark:1},Df=class{constructor(i={}){if(this.o=i,this.prerendered=new sv,this.webspeech=new cv,this.providers=[],this.manifestIds=new Set,this.queue=[],this.current=null,this.last=null,this.seq=0,this.listeners=new Map,this.ctx=null,this.master=null,this.unlocked=!1,this.unlockWaiters=[],this.stats={played:0,failed:0,dropped:0,byProvider:{},latencies:[],fallbacks:0},this._an=null,this._buf=null,this.curEl=null,this.elGain=null,this.characters={...i.characters||{}},this.cache=new $_(i.cacheBytes),this._volume=i.volume??1,this._rate=i.rate??1,this.kindVol={dialogue:1,narration:1,instruction:1,bark:.8,...i.kindVolume||{}},i.manifest)for(let t of i.manifest.voices)this.manifestIds.add(t.id);i.kokoro&&(this.kokoro=new rv(i.kokoro,this.cache)),i.server&&(this.server=new av(i.server));let e={prerendered:this.prerendered,"kokoro-browser":this.kokoro,server:this.server,webspeech:this.webspeech};this.providers=(i.fallbackOrder||["prerendered","kokoro-browser","server","webspeech"]).map(t=>e[t]).filter(Boolean)}registerScene(i,e){this.prerendered.register(i,e),this.emit("scene",{scene:i.scene,lines:i.lines.length})}setCharacter(i,e){this.characters[i]={...this.characters[i],...e}}setCharacterVoice(i,e){this.characters[i]={...this.characters[i]||{},voice:e}}getCharacter(i){return this.characters[i]}get volume(){return this._volume}setVolume(i){this._volume=Math.max(0,Math.min(1,i)),this.master&&(this.master.gain.value=this._volume),this.applyElementVolume(),this.emit("volume",this._volume)}setKindVolume(i,e){this.kindVol[i]=e,this.applyElementVolume()}get rate(){return this._rate}setRate(i){this._rate=Math.max(.5,Math.min(2,i)),this.curEl&&(this.curEl.playbackRate=this.effectiveRate(this.current?.clip,this.current?.job.req)),this.emit("rate",this._rate)}on(i,e){return this.listeners.has(i)||this.listeners.set(i,new Set),this.listeners.get(i).add(e),()=>this.listeners.get(i).delete(e)}emit(i,e){this.listeners.get(i)?.forEach(t=>{try{t(e)}catch(n){console.error(n)}})}async unlock(){try{if(this.useWebAudio&&!this.ctx&&this.initCtx(),this.ctx&&this.ctx.state!=="running"&&await this.ctx.resume(),this.ctx){let i=this.ctx.createBuffer(1,1,22050),e=this.ctx.createBufferSource();e.buffer=i,e.connect(this.ctx.destination),e.start()}}catch{}this.unlocked=!0,this.emit("unlocked",{}),this.unlockWaiters.splice(0).forEach(i=>i())}createAnalyser(){if(!this.useWebAudio||(this.ctx||this.initCtx(),!this.ctx||!this.master))return null;let i=this.ctx.createAnalyser();return i.fftSize=2048,this.master.connect(i),i}getOutputLevel(){if(!this._an){if(this._an=this.createAnalyser(),!this._an)return this.current?.1:0;this._buf=new Float32Array(this._an.fftSize)}this._an.getFloatTimeDomainData(this._buf);let i=0;for(let e of this._buf)i+=e*e;return Math.sqrt(i/this._buf.length)}get audioContextState(){return this.ctx?.state||"none"}get useWebAudio(){return this.o.useWebAudio??(typeof location>"u"||location.protocol!=="file:")}initCtx(){let i=globalThis.AudioContext||globalThis.webkitAudioContext;i&&(this.ctx=new i,this.master=this.ctx.createGain(),this.master.gain.value=this._volume,this.master.connect(this.ctx.destination))}say(i){let e=i.kind||this.characters[i.character||""]?.kind||"dialogue",t=i.priority??lv[e],n={id:++this.seq,req:{...i,kind:e},priority:t,resolve:()=>{},enq:Ti()},s=new Promise(a=>n.resolve=a),r=i.policy||"queue";if(r==="drop-if-busy"&&(this.current||this.queue.length))return this.stats.dropped++,n.resolve({id:n.id,request:n.req,status:"dropped",attempts:[]}),s;if(r==="interrupt"&&this.current&&t>=this.current.job.priority)this.queue.unshift(n),this.current.stop("stopped");else{let a=this.queue.findIndex(c=>c.priority<t);a<0&&(a=this.queue.length),this.queue.splice(a,0,n);let o=this.o.maxQueue??20;for(;this.queue.length>o;){let c=this.queue.pop();this.stats.dropped++,c.resolve({id:c.id,request:c.req,status:"dropped",attempts:[]})}}return this.emit("queue",{length:this.queue.length}),this.pump(),s}line(i,e={}){let t=this.prerendered.lookup({lineId:i,scene:e.scene});return this.say({lineId:i,text:t?.line.text,character:t?.line.character,...e})}narrate(i,e={}){return this.say({text:i,character:"narrator",kind:"narration",...e})}instruct(i,e={}){return this.say({text:i,character:"guide",kind:"instruction",policy:"interrupt",priority:7,...e})}stop(){this.queue.splice(0).forEach(e=>e.resolve({id:e.id,request:e.req,status:"stopped",attempts:[]})),this.current?.stop("stopped");try{this.webspeech.supported&&speechSynthesis.cancel()}catch{}}skip(){this.current?.stop("skipped")}replay(){return this.last?this.say({...this.last,policy:"interrupt",priority:99}):Promise.resolve(null)}get busy(){return!!this.current||this.queue.length>0}get queueLength(){return this.queue.length}async preload(i){typeof location<"u"&&location.protocol==="file:"||await Promise.all(i.map(async e=>{let t=this.prerendered.lookup({lineId:e});if(t)try{await fetch(t.base?t.base.replace(/\/?$/,"/")+t.line.src:t.line.src)}catch{}}))}warmupNeural(){return this.kokoro?.warmup()}getStats(){let i=this.stats.latencies,e=i.length?i.reduce((t,n)=>t+n,0)/i.length:0;return{...this.stats,avgLatencyMs:Math.round(e),maxLatencyMs:Math.round(Math.max(0,...i)),cache:this.cache.stats(),audioContext:this.audioContextState,kokoroReady:!!this.kokoro?.ready}}resolve(i){let e=i.req,t=this.characters[e.character||""]||{},n=e.lineId?this.prerendered.lookup({lineId:e.lineId,scene:e.scene})?.line:void 0,s=e.voice||t.voice||n?.voice,r=[...new Set([s,...t.fallbackVoices||[],this.o.defaultVoice].filter(Boolean))];return{...e,text:e.text||n?.text||"",voices:r,rate:(e.rate??1)*(t.rate??1),kind:e.kind||"dialogue",line:n,webSpeech:t.webSpeech,voice:e.voice||(n&&t.voice&&t.voice!==n.voice?t.voice:void 0)}}async pump(){if(this.current||!this.queue.length)return;let i=this.queue.shift(),e=new AbortController,t=null,n=()=>{};this.current={job:i,stop:o=>{t=o,e.abort(),n()}};let s=this.resolve(i);this.last=i.req;let r={id:i.id,request:i.req,status:"failed",attempts:[]},a=Ti();for(let o of this.providers){if(t)break;let c={...s,rate:o.id==="prerendered"?s.rate:s.rate*this._rate},l=null;try{l=await o.prepare(c,e.signal)}catch(u){r.attempts.push({provider:o.id,ok:!1,reason:String(u?.message||u)}),this.emit("fallback",{id:i.id,from:o.id,reason:String(u?.message||u)});continue}if(!l){r.attempts.push({provider:o.id,ok:!1,reason:"unavailable"});continue}if(t)break;this.current.clip=l;let h=await this.playClip(i,l,a,u=>n=u);if(h.ok){r.attempts.push({provider:o.id,ok:!0}),r.provider=o.id,r.voice=l.voice,r.latencyMs=h.latency,r.status=t||"completed";break}r.attempts.push({provider:o.id,ok:!1,reason:h.reason}),this.stats.fallbacks++,this.emit("fallback",{id:i.id,from:o.id,reason:h.reason})}t&&r.status==="failed"&&(r.status=t),r.status==="failed"?(this.stats.failed++,r.error=r.attempts.map(o=>`${o.provider}:${o.reason}`).join(", "),this.emit("error",r)):r.provider&&(this.stats.played++,this.stats.byProvider[r.provider]=(this.stats.byProvider[r.provider]||0)+1,r.latencyMs!=null&&this.stats.latencies.push(r.latencyMs)),this.emit("end",r),this.current=null,i.resolve(r),this.queue.length&&setTimeout(()=>this.pump(),this.o.gapMs??250)}effectiveRate(i,e){return!i||i.bakedRate?1:Math.max(.5,Math.min(2,this._rate*(e?.rate??1)*(this.characters[e?.character||""]?.rate??1)))}gainFor(i){return(this.kindVol[i.kind||"dialogue"]??1)*(this.characters[i.character||""]?.volume??1)}applyElementVolume(){this.curEl&&this.current&&!this.elGain&&(this.curEl.volume=Math.min(1,this._volume*this.gainFor(this.current.job.req))),this.elGain&&this.current&&(this.elGain.gain.value=this.gainFor(this.current.job.req))}waitUnlock(){return new Promise(i=>this.unlockWaiters.push(i))}subtitle(i,e,t,n){let s=this.characters[i.req.character||""],r=e.cues.find(o=>t>=o.start-.05&&t<=o.end+.3)||e.cues.filter(o=>o.start<=t).pop()||e.cues[0],a={id:i.id,character:i.req.character,characterName:s?.name,kind:i.req.kind||"dialogue",text:e.text,cue:r,wordIndex:n,words:e.words,time:t,provider:e.provider,voice:e.voice};this.emit("subtitle",a)}playClip(i,e,t,n){return e.webSpeech?this.playWebSpeech(i,e,t,n):new Promise(s=>{let r=new Audio;this.curEl=r;let a=!1,o=!1,c=0,l=-2;r.preload="auto",r.preservesPitch=!0,r.webkitPreservesPitch=!0,/^https?:/.test(e.url||"")&&typeof location<"u"&&location.protocol!=="file:"&&(r.crossOrigin="anonymous");let h=d=>{if(!o){o=!0,clearInterval(c),r.pause(),r.removeAttribute("src");try{r.load()}catch{}e.url?.startsWith("blob:")&&URL.revokeObjectURL(e.url),this.curEl=null,this.elGain?.disconnect(),this.elGain=null,s(d)}};if(n(()=>h({ok:!0,latency:void 0})),this.useWebAudio)try{if(this.ctx||this.initCtx(),this.ctx){let d=this.ctx.createMediaElementSource(r);this.elGain=this.ctx.createGain(),this.elGain.gain.value=this.gainFor(i.req),d.connect(this.elGain).connect(this.master)}}catch{this.elGain=null}this.elGain||(r.volume=Math.min(1,this._volume*this.gainFor(i.req))),r.addEventListener("playing",()=>{if(a)return;a=!0;let d=Ti()-t;this.emit("start",{id:i.id,request:i.req,provider:e.provider,voice:e.voice,text:e.text,latencyMs:d,duration:e.duration,timingMethod:e.timingMethod}),this.current.started=d,this.current.latency=d,this.subtitle(i,e,0,-1),c=setInterval(()=>{let f=r.currentTime,g=-1;for(let x=0;x<e.words.length&&e.words[x].start<=f;x++)g=x;g!==l&&(l=g,this.subtitle(i,e,f,g))},40)}),r.addEventListener("ended",()=>h({ok:!0,latency:this.current?.latency})),r.addEventListener("error",()=>{h(a?{ok:!0}:{ok:!1,reason:"load-error "+(r.error?.code??"")})}),r.src=e.url,r.playbackRate=this.effectiveRate(e,i.req);let u=()=>r.play().catch(async d=>{o||(d?.name==="NotAllowedError"?(this.emit("autoplay-blocked",{id:i.id}),await this.waitUnlock(),o||(this.ctx?.state==="suspended"&&await this.ctx.resume().catch(()=>{}),u())):d?.name!=="AbortError"&&h({ok:!1,reason:"play-error "+d?.name}))});this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),u()})}playWebSpeech(i,e,t,n){return new Promise(s=>{let r=e.webSpeech,a=new SpeechSynthesisUtterance(e.text),o=!1,c=0,l=speechSynthesis.getVoices().find(d=>d.name===r.voiceName);l&&(a.voice=l),r.lang&&(a.lang=r.lang),a.pitch=r.pitch??1,a.rate=r.rate,a.volume=Math.min(1,this._volume*this.gainFor(i.req));let h=d=>{o||(o=!0,clearTimeout(u),s(d))};n(()=>{speechSynthesis.cancel(),h({ok:!0})}),a.onstart=()=>{c=Ti();let d=c-t;this.current.latency=d,this.emit("start",{id:i.id,request:i.req,provider:"webspeech",voice:e.voice,text:e.text,latencyMs:d,timingMethod:"boundary-events"}),this.subtitle(i,e,0,-1)},a.onboundary=d=>{let f=e.words.findIndex(g=>(g.char??0)>=d.charIndex);this.subtitle(i,e,(Ti()-c)/1e3,f<0?e.words.length-1:f)},a.onend=()=>h({ok:!0,latency:this.current?.latency}),a.onerror=d=>h({ok:d.error==="interrupted"||d.error==="canceled",reason:"webspeech-"+d.error});let u=setTimeout(()=>{c||(speechSynthesis.cancel(),h({ok:!1,reason:"webspeech-timeout"}))},4e3+e.text.length*10);speechSynthesis.speak(a)})}};var gy=new Set("the a an is was did do does what who why how where when of to in on it you your i me my about tell and or that this there".split(" "));var tu={provider:"stock",stockVoice:"kokoro-bm_george",label:"Temporary stock voice \u2014 Chris's own voice clone is not approved yet",cloneBase:"assets/audio_clone/"},Yo=class{constructor(){this.enabled=!0,this.engine=null,this.data=null,this.listeners=[]}async init(){let e=window.__ML_AUDIO_JSON;if(!e)try{e=await(await fetch(un("assets/audio/meadowlight_ch1.audio.json"))).json()}catch(r){console.warn("audio json missing",r);return}this.data=e;let t={};for(let r of e.lines)t[r.character]={name:r.character,voice:r.voice};this.engine=new Df({characters:t,fallbackOrder:["prerendered","webspeech"]});let n=window.__ML_EMBED?"":new URL("assets/audio/",location.href).href;if(window.__ML_EMBED)for(let r of e.lines)r.src=un("assets/audio/"+r.src);this.engine.registerScene(e,n),this.byId=Object.fromEntries(e.lines.map(r=>[r.id,r]));let s=window.__ML_AUDIO_JSON2;if(!s)try{s=await(await fetch(un("assets/audio_b004/titan_awakens_b004.audio.json"))).json()}catch(r){console.warn("b004 audio json missing",r)}if(s){for(let r of s.lines)t[r.character]||this.engine.setCharacter(r.character,{name:r.character,voice:r.voice}),window.__ML_EMBED&&(r.src=un("assets/audio_b004/"+r.src));this.engine.registerScene(s,window.__ML_EMBED?"":new URL("assets/audio_b004/",location.href).href);for(let r of s.lines)this.byId[r.id]=r}}unlock(){try{this.engine&&this.engine.unlock()}catch{}}text(e){let t=this.byId?.[e];return t?.display||t?.text||e}line(e){return this.byId?.[e]}on(e,t){this.engine&&this.engine.on(e,t)}async play(e){if(!this.enabled||!this.engine)return{skipped:!0};try{return await this.engine.line(e,{policy:"interrupt",priority:8})}catch(t){return{error:String(t)}}}stop(){try{this.engine&&this.engine.stop()}catch{}}level(){try{return this.engine?this.engine.getOutputLevel():0}catch{return 0}}};var dn=i=>document.getElementById(i),jo=class{constructor(){this.data=null,this.playing=!1,this.onEnd=null,this.audio=null,this.t0=0,this.useClock=!1,this.idx=-1,this.cue=-1,this.speed=1}async load(){return this.data=window.__ML_CINE_JSON||await(await fetch(un("assets/cine/cine.json"))).json(),this.imgs=this.data.scenes.map(e=>{let t=new Image;return t.src=un(e.img),t}),this.audio=new Audio,this.audio.preload="auto",this.audio.src=un(this.data.audio),this.audio.setAttribute("playsinline",""),dn("cSkip").onclick=e=>{e.stopPropagation(),this.skip()},this}start(e,{speed:t=1,muted:n=!1}={}){this.onEnd=e,this.playing=!0,this.idx=-1,this.cue=-1,this.speed=t,this.log=[],dn("cine").classList.remove("hidden"),dn("cine").classList.add("on"),this.audio.currentTime=0,this.audio.muted=n,this.audio.playbackRate=t,this.useClock=!1;let s=this.audio.play();this.t0=performance.now(),s&&s.catch&&s.catch(a=>{this.useClock=!0,this.t0=performance.now(),this.log.push("audio-blocked:"+a.name)}),this.audio.onended=()=>{this.playing&&this.finish("ended")};let r=()=>{this.playing&&(this.update(),requestAnimationFrame(r))};requestAnimationFrame(r)}time(){return!this.useClock&&!this.audio.paused&&this.audio.currentTime>0?this.audio.currentTime:(performance.now()-this.t0)/1e3*this.speed}update(){let e=this.time(),t=this.data;!this.useClock&&this.audio.paused&&performance.now()-this.t0>1500&&this.audio.currentTime===0&&(this.useClock=!0,this.t0=performance.now());let n=t.scenes.findIndex(u=>e>=u.start&&e<u.end);if(n<0&&e>=t.total){this.finish("ended");return}n<0&&(n=0),n!==this.idx&&this.showScene(n);let s=t.scenes[n],r=Math.min(1,(e-s.start)/(s.end-s.start)),a=[[1,0],[-1,0],[0,1],[1,1],[-1,1],[0,-1],[1,-1],[0,0],[-1,-1],[0,1],[1,0],[0,-1]][n],o=1.04+.1*r,c=a[0]*(r-.5)*3,l=a[1]*(r-.5)*2.4;this.cur.style.transform=`scale(${o.toFixed(4)}) translate(${c.toFixed(2)}%,${l.toFixed(2)}%)`,dn("cProg").style.width=(e/t.total*100).toFixed(2)+"%";let h=t.cues.findIndex(u=>e>=u.start-.05&&e<u.end+.6);if(h!==this.cue){this.cue=h;let u=t.cues[h];u?(dn("cSub").classList.remove("hidden"),dn("cSpk").textContent=u.speaker,dn("cSpk").dataset.who=u.speaker.toLowerCase(),dn("cTxt").textContent=u.text,this.log.push("cue:"+u.id)):dn("cSub").classList.add("hidden")}for(let u of t.sfx)if(u.name==="flash"&&e>=u.t&&e<u.t+.05&&!this["_f"+u.t]){this["_f"+u.t]=1;let d=dn("cFlash");d.classList.remove("go"),d.offsetWidth,d.classList.add("go")}}showScene(e){this.idx=e;let t=this.data.scenes[e];this.log.push("scene:"+t.n);let n=dn("cImgs"),s=document.createElement("img");s.src=un(t.img),s.className="cimg",s.alt=t.title,n.appendChild(s),requestAnimationFrame(()=>s.classList.add("in"));let r=[...n.querySelectorAll("img")].filter(a=>a!==s);setTimeout(()=>r.forEach(a=>a.remove()),1300),this.cur=s,dn("cBg").style.backgroundImage=`url("${un(t.img)}")`,dn("cTitle").textContent=`${t.n}. ${t.title}`}skip(){this.playing&&(this.log.push("skip"),this.finish("skip"))}finish(e){if(!this.playing)return;this.playing=!1,this.endReason=e;try{this.audio.pause()}catch{}dn("cine").classList.remove("on"),setTimeout(()=>dn("cine").classList.add("hidden"),700);let t=this.onEnd;this.onEnd=null,t&&t(e)}};var hv=["enter","flash","chime","rumble","cave_amb","dial","wrong","right","grind","stomp","pickup","hum"],Ko=class{constructor(){this.ctx=null,this.buf={},this.enabled=!0,this.loops={},this.played=[]}unlock(){try{if(!this.ctx){let e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=.8,this.master.connect(this.ctx.destination),this.loadAll()}this.ctx.state==="suspended"&&this.ctx.resume()}catch{}}async loadAll(){for(let e of hv)try{let n=await(await fetch(un("assets/sfx/"+e+".mp3"))).arrayBuffer();this.buf[e]=await new Promise((s,r)=>this.ctx.decodeAudioData(n,s,r))}catch{}}play(e,t=1,n=1){if(this.played.push(e),!this.enabled||!this.ctx||!this.buf[e])return null;let s=this.ctx.createBufferSource();s.buffer=this.buf[e],s.playbackRate.value=n;let r=this.ctx.createGain();return r.gain.value=t,s.connect(r),r.connect(this.master),s.start(),{s,g:r}}loop(e,t=.5){if(this.loops[e])return;let n=this.play(e,t);n&&(n.s.loop=!0,this.loops[e]=n)}stopLoop(e){let t=this.loops[e];if(t){try{t.s.stop()}catch{}delete this.loops[e]}}};var he=new A(600,0,0),Zo=77,Dt=()=>(Zo=Zo*16807%2147483647,(Zo-1)/2147483646);var $i=[{id:"entry",a:[0,5],b:[0,-16],r:2.7},{id:"curve",a:[0,-16],b:[8,-28],r:2.7},{id:"main",a:[8,-28],b:[16,-40],r:2.7},{id:"branch",a:[8,-28],b:[-4,-36],r:2.3},{id:"branch2",a:[-4,-36],b:[-12,-38],r:2.3},{id:"stairs",a:[16,-40],b:[18.6,-49.5],r:2.6,stairs:[0,-3,7]}],ma=[{id:"hall",c:[0,3],r:3.6,y:0},{id:"alcove",c:[-13,-39],r:3.6,y:0},{id:"chamber",c:[20,-64],r:19.5,y:-3}],ni={x:20,z:-64},Me={x0:8,x1:32,z0:-74,z1:-70,y:-1.5,sx0:17,sx1:23,sz1:-66.5};function Jo(i,e,t){let[n,s]=t.a,[r,a]=t.b,o=r-n,c=a-s,l=Math.max(0,Math.min(1,((i-n)*o+(e-s)*c)/(o*o+c*c)));return{d:Math.hypot(i-n-o*l,e-s-c*l),t:l,px:n+o*l,pz:s+c*l}}function uv(i,e){return i>Me.x0&&i<Me.x1&&e>Me.z0&&e<Me.z1}function dv(i,e){return i>Me.sx0&&i<Me.sx1&&e>=Me.z1&&e<Me.sz1}function nu(i,e){if(uv(i,e))return Me.y;if(dv(i,e)){let r=(e-Me.z1)/(Me.sz1-Me.z1),a=4;return Me.y+(-3-Me.y)*(Math.floor(r*a)+1)/(a+1)}let t=$i[5],n=Jo(i,e,t),s=Math.hypot(i-ni.x,e-ni.z);if(s<19.5&&!(n.d<t.r&&n.t<.98))return-3;if(n.d<t.r+.5){let r=t.stairs[2];return t.stairs[1]*Math.min(r-1,Math.floor(n.t*r))/r}return s<21?-3:0}function Qi(i,e){let t=1e9;for(let n of $i)t=Math.min(t,Jo(i,e,n).d-n.r);for(let n of ma)t=Math.min(t,Math.hypot(i-n.c[0],e-n.c[1])-n.r);return t}function fv(i,e){let t=null,n=1e9;for(let s of $i){let r=Jo(i,e,s),a=r.d-s.r;if(a<n){n=a;let o=r.d>1e-6?(s.r-.02)/r.d:0;t=[r.px+(i-r.px)*o,r.pz+(e-r.pz)*o]}}for(let s of ma){let r=Math.hypot(i-s.c[0],e-s.c[1]),a=r-s.r;if(a<n){n=a;let o=(s.r-.02)/(r||1);t=[s.c[0]+(i-s.c[0])*o,s.c[1]+(e-s.c[1])*o]}}return t}function pv(){let i=new vr(1,1),e=i.attributes.position;for(let t=0;t<e.count;t++){let n=new A().fromBufferAttribute(e,t),s=.78+.4*Math.abs(Math.sin(n.x*3.1+n.y*2.3)*Math.cos(n.z*2.7-n.y));n.multiplyScalar(s),e.setXYZ(t,n.x,n.y,n.z)}return i.computeVertexNormals(),i}function mv(){let i=document.createElement("canvas");i.width=i.height=64;let e=i.getContext("2d"),t=e.createRadialGradient(32,32,0,32,32,32);return t.addColorStop(0,"rgba(160,225,255,1)"),t.addColorStop(.35,"rgba(80,180,255,0.45)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new hn(i)}function Qo(i,e,t,{bg:n="rgba(10,30,50,0.88)",fg:s="#9fe3ff",font:r="bold 34px Trebuchet MS",glow:a=!0,cw:o=512}={}){let c=document.createElement("canvas");c.width=o,c.height=Math.round(o*t/e);let l=c.getContext("2d"),h=f=>{l.clearRect(0,0,c.width,c.height),l.fillStyle=n,l.beginPath(),l.roundRect(4,4,c.width-8,c.height-8,18),l.fill(),l.strokeStyle=s,l.lineWidth=4,l.stroke(),l.fillStyle=s,l.font=r,l.textAlign="center",l.textBaseline="middle",a&&(l.shadowColor=s,l.shadowBlur=12);let g=c.height/(f.length+1);f.forEach((x,m)=>l.fillText(x,c.width/2,g*(m+1))),l.shadowBlur=0};h(i);let u=new hn(c);u.colorSpace=it;let d=new Ue(new Mn(e,t),new Ht({map:u,transparent:!0,side:Nt,fog:!1}));return d.userData.set=f=>{h(f),u.needsUpdate=!0},d}var kf=[{key:"serve",word:"SERVE LIFE",col:"#7fe08a",icon:"leaf"},{key:"build",word:"BUILD",col:"#ffb45a",icon:"hammer"},{key:"protect",word:"PROTECT",col:"#9fd0ff",icon:"shield"},{key:"connect",word:"CONNECT",col:"#d9a0ff",icon:"rings"}];function Nf(i,e=256){let t=document.createElement("canvas");t.width=t.height=e;let n=t.getContext("2d"),s=e/256;return n.fillStyle="#2b2f36",n.fillRect(0,0,e,e),n.strokeStyle=i.col,n.lineWidth=10*s,n.strokeRect(8*s,8*s,e-16*s,e-16*s),n.save(),n.translate(128*s,100*s),n.scale(s,s),n.strokeStyle=i.col,n.fillStyle=i.col,n.lineWidth=9,n.shadowColor=i.col,n.shadowBlur=14,i.icon==="leaf"&&(n.beginPath(),n.moveTo(0,55),n.quadraticCurveTo(-60,0,0,-55),n.quadraticCurveTo(60,0,0,55),n.fill(),n.strokeStyle="#2b2f36",n.lineWidth=6,n.beginPath(),n.moveTo(0,50),n.lineTo(0,-40),n.stroke()),i.icon==="hammer"&&(n.fillRect(-45,-50,90,32),n.fillRect(-8,-20,16,80)),i.icon==="shield"&&(n.beginPath(),n.moveTo(0,-55),n.lineTo(48,-38),n.quadraticCurveTo(45,30,0,58),n.quadraticCurveTo(-45,30,-48,-38),n.closePath(),n.fill()),i.icon==="rings"&&(n.beginPath(),n.arc(-22,0,30,0,7),n.stroke(),n.beginPath(),n.arc(22,0,30,0,7),n.stroke()),n.restore(),n.fillStyle=i.col,n.font=`bold ${Math.round(34*s)}px Trebuchet MS`,n.textAlign="center",n.fillText(i.word,128*s,222*s),t}function Uf(i,e){Zo=77;let t=new ot;t.name="cave",t.visible=!1,i.add(t);let n=ei("rock.jpg");n.repeat.set(1.5,1.5);let s=new Ct({color:9080732,map:n,roughness:.95,flatShading:!0}),r=ei("rock.jpg");r.repeat.set(6,6);let a=new Ct({color:8025192,map:r,roughness:1}),o=(L,F)=>[he.x+L,he.z+F],c=[],l=L=>{let[F,O]=L.a,[Z,H]=L.b,$=Math.hypot(Z-F,H-O),ie=new Mn(L.r*2+1.4,$+L.r*1.6);ie.rotateX(-Math.PI/2);let le=new Ue(ie,a);le.position.set(he.x+(F+Z)/2,0,he.z+(O+H)/2),le.rotation.y=Math.atan2(Z-F,H-O),le.receiveShadow=!0,t.add(le)};for(let L of $i)L.stairs||l(L);for(let L of ma){let F=new To(L.r+1.2,40);F.rotateX(-Math.PI/2);let O=new Ue(F,a);O.position.set(he.x+L.c[0],L.y,he.z+L.c[1]),t.add(O)}{let L=$i[5],[F,O]=L.a,[Z,H]=L.b,$=L.stairs[2],ie=Math.hypot(Z-F,H-O),le=Math.atan2(Z-F,H-O);for(let _e=0;_e<$;_e++){let Oe=_e/$,Q=L.stairs[1]*_e/$,ne=new Ue(new yn(L.r*2+1.2,3.5,ie/$+.05),a);ne.position.set(he.x+F+(Z-F)*(Oe+.5/$),Q-1.75,he.z+O+(H-O)*(Oe+.5/$)),ne.rotation.y=le,t.add(ne)}}{let L=new Ue(new yn(Me.x1-Me.x0,1.7,Me.z1-Me.z0),s);L.position.set(he.x+(Me.x0+Me.x1)/2,Me.y-.85+.1,he.z+(Me.z0+Me.z1)/2),L.receiveShadow=!0,t.add(L);let F=4,O=(Me.sz1-Me.z1)/F;for(let Z=0;Z<F;Z++){let H=Me.y+(-3-Me.y)*(Z+1)/(F+1),$=new Ue(new yn(Me.sx1-Me.sx0,1,O+.02),s);$.position.set(he.x+(Me.sx0+Me.sx1)/2,H-.5,he.z+Me.z1+O*(Z+.5)),t.add($)}}let h=[],u=(L,F,O,Z,H,$)=>new Ne().compose(new A(L,F,O),new yt().setFromEuler(new nn(Dt()*.6,$,Dt()*.6)),new A(Z,Z*H,Z)),d=(L,F,O,Z,H=1.3)=>{Qi(L,F)<Z*.55||h.push(u(he.x+L,O,he.z+F,Z,H,Dt()*6))};for(let L of $i){let[F,O]=L.a,[Z,H]=L.b,$=Math.hypot(Z-F,H-O),ie=(Z-F)/$,le=(H-O)/$,_e=-le,Oe=ie;for(let Q=-1.5;Q<=$+1.5;Q+=1.5){let ne=F+ie*Q,be=O+le*Q,ce=nu(ne,be);for(let Se of[-1,1]){let Ee=L.r+1.25+Dt()*.3;d(ne+_e*Ee*Se,be+Oe*Ee*Se,ce+.6,1.45+Dt()*.4),d(ne+_e*(Ee+.2)*Se,be+Oe*(Ee+.2)*Se,ce+2.9,1.5+Dt()*.4),d(ne+_e*(Ee-.5)*Se,be+Oe*(Ee-.5)*Se,ce+4.6,1.6,.9)}for(let Se of[-1.4,.2,1.6])h.push(u(he.x+ne+_e*Se,ce+5.8+Dt()*.4,he.z+be+Oe*Se,1.7+Dt()*.3,.7,Dt()*6))}}for(let L of ma)if(L.id!=="chamber")for(let F=0;F<Math.PI*2;F+=.45){let O=L.c[0]+Math.cos(F)*(L.r+1.2),Z=L.c[1]+Math.sin(F)*(L.r+1.2);d(O,Z,L.y+.6,1.5),d(O,Z,L.y+2.9,1.5);for(let H of[0,.5])h.push(u(he.x+L.c[0]+Math.cos(F)*L.r*H,L.y+5.8,he.z+L.c[1]+Math.sin(F)*L.r*H,2.2,.7,Dt()*6))}{let L=ma[2];for(let F=0;F<7;F++)for(let O=0;O<Math.PI*2;O+=.2){let Z=L.r+2.2-F*.5,H=L.c[0]+Math.cos(O+F*.1)*Z,$=L.c[1]+Math.sin(O+F*.1)*Z,ie=-2+F*3.6;F<2?d(H,$,ie,2.4+Dt()*.6,1.4):h.push(u(he.x+H,ie,he.z+$,2.6+Dt()*.8,1.4,Dt()*6))}}let f=pv(),g=new Xn(f,s,h.length);h.forEach((L,F)=>g.setMatrixAt(F,L)),g.receiveShadow=!0,g.computeBoundingSphere(),t.add(g);{let L=new Ue(new yr(30,28,14,0,Math.PI*2,0,Math.PI/2),new Ct({color:3817290,map:n,side:zt,roughness:1}));L.position.set(he.x+ni.x,22,he.z+ni.z),L.scale.set(.8,.45,.8),t.add(L)}let x=[[6,-54],[34,-55],[4,-70],[36,-72],[11,-48],[30,-47]],m=[];for(let[L,F]of x){let O=new Ue(new Ao(1.3,9,7),s);O.position.set(he.x+L,-3+4.5,he.z+F),t.add(O),m.push({x:he.x+L,z:he.z+F,r:1.3})}let p=(L,F,O,Z,H=.3)=>m.push({seg:[he.x+L,he.z+F,he.x+O,he.z+Z],r:H});p(Me.x0,Me.z1,Me.sx0,Me.z1),p(Me.sx1,Me.z1,Me.x1,Me.z1),p(Me.x0,Me.z0,Me.x0,Me.z1),p(Me.x1,Me.z0,Me.x1,Me.z1),p(Me.x0,Me.z0,Me.x1,Me.z0),p(Me.sx0,Me.z1,Me.sx0,Me.sz1,.25),p(Me.sx1,Me.z1,Me.sx1,Me.sz1,.25);let _=[],y=[],v=(L,F,O,Z=4,H=1)=>{for(let $=0;$<Z;$++){let ie=Dt()*6.28,le=Dt()*.5*H,_e=(.5+Dt()*.9)*H;_.push(new Ne().compose(new A(he.x+L+Math.cos(ie)*le,O+_e*.4,he.z+F+Math.sin(ie)*le),new yt().setFromEuler(new nn((Dt()-.5)*.8,Dt()*6,(Dt()-.5)*.8)),new A(.22*H,_e,.22*H)))}y.push(he.x+L,O+.6*H,he.z+F)};for(let L of $i){let[F,O]=L.a,[Z,H]=L.b,$=Math.hypot(Z-F,H-O),ie=(Z-F)/$,le=(H-O)/$;for(let _e=2;_e<$;_e+=5){let Oe=Dt()<.5?-1:1,Q=F+ie*_e-le*Oe*(L.r-.2),ne=O+le*_e+ie*Oe*(L.r-.2);v(Q,ne,nu(Q,ne),4,.9)}}for(let L=0;L<6.28;L+=.5){let F=ni.x+Math.cos(L)*18.6,O=ni.z+Math.sin(L)*18.6;Qi(F,O)<-.5&&Jo(F,O,$i[5]).d>3.5&&v(F,O,-3,6,1.6)}v(-15,-40,0,8,1.3),v(-11,-42,0,5,1);let I=new _s(1,0),T=new Ct({color:10479359,emissive:4175103,emissiveIntensity:1.8,roughness:.2,metalness:.1,flatShading:!0}),R=new Xn(I,T,_.length);_.forEach((L,F)=>R.setMatrixAt(F,L)),R.computeBoundingSphere(),t.add(R);let D=new St;D.setAttribute("position",new Je(y,3));let S=new xr(D,new xs({map:mv(),size:3.2,sizeAttenuation:!0,transparent:!0,depthWrite:!1,blending:fs,fog:!1}));t.add(S);{let L=new Ue(new Mn(6,6),new Ht({color:15398655,fog:!1}));L.position.set(he.x,2.5,he.z+7.2),L.rotation.y=Math.PI,t.add(L)}let M=[[0,2,3.5,12576511,14,16],[8,3,-28,7325951,18,22],[-13,2.5,-39,8378623,22,14],[20,14,-60,9425151,170,60],[20,9,-76,10476799,90,30],[6,5,-55,7325951,30,20],[33,5,-55,7325951,30,20]];for(let[L,F,O,Z,H,$]of M){let ie=new qi(Z,H,$,1.4);ie.position.set(he.x+L,F,he.z+O),t.add(ie)}let k=new wr(9416920,2764344,1.1);t.add(k);let W=Qo(['"He needs a purpose."','"What is he supposed to do?"',"\u2014 the night TITAN first woke \u2014"],6,2.6,{font:"italic 30px Georgia",fg:"#cfe9ff"});return W.position.set(he.x+13.6,2.2,he.z+-41.5),W.rotation.y=Math.atan2(1,.25),t.add(W),{group:t,colliders:m,plat:Me,K:new A(he.x+ni.x,-3,he.z+ni.z),mural:W,entry:new A(he.x,0,he.z+2.5),exitPoint:new A(he.x,0,he.z+5),alcove:new A(he.x-13,0,he.z-39),chamberDoor:new A(he.x+18.6,-3,he.z-49.5),groundAt:(L,F)=>nu(L-he.x,F-he.z),wd:(L,F)=>Qi(L-he.x,F-he.z),inChamber:(L,F)=>Math.hypot(L-he.x-ni.x,F-he.z-ni.z)<19.5,constrain(L,F){for(let O=0;O<5;O++){let Z=L.x-he.x,H=L.z-he.z,$=Qi(Z,H);if($<=-F)return;if($>0){let Q=fv(Z,H);L.x=he.x+Q[0],L.z=he.z+Q[1];continue}let ie=.05,le=(Qi(Z+ie,H)-Qi(Z-ie,H))/(2*ie),_e=(Qi(Z,H+ie)-Qi(Z,H-ie))/(2*ie),Oe=Math.hypot(le,_e)||1;L.x-=le/Oe*($+F),L.z-=_e/Oe*($+F)}},sockets:[11,16.5,23.5,29].map(L=>new A(he.x+L,Me.y,he.z-72.6)),consolePos:new A(he.x+20,Me.y,he.z-72.9),stoneSpots:{serve:new A(he.x+6.5,-3,he.z-60),build:new A(he.x-14.5,0,he.z-39.5),protect:new A(he.x+33.5,-3,he.z-60),connect:new A(he.x+27,-3,he.z-51)},titanPos:new A(he.x+20,-3,he.z-80),boulderPos:new A(he.x+.5,0,he.z-9),update(L){T.emissiveIntensity=1.6+Math.sin(L*1.3)*.35,S.material.size=3+Math.sin(L*1.7)*.25},stats:{chunks:h.length,crystals:_.length,glows:y.length/3,lights:M.length}}}var ye=i=>document.getElementById(i),es=new URLSearchParams(location.search),rc=matchMedia("(pointer:coarse)").matches||"ontouchstart"in window||es.has("touch");rc&&document.body.classList.add("touch");var Cs={low:es.get("q")==="low"||es.get("q")!=="high"&&rc},Pt=new bo({antialias:!Cs.low,powerPreference:"high-performance",preserveDrawingBuffer:es.has("test")});Pt.setPixelRatio(Math.min(devicePixelRatio,Cs.low?1.5:2));Pt.setSize(innerWidth,innerHeight);Pt.outputColorSpace=it;Pt.toneMapping=sh;Pt.toneMappingExposure=1.05;Pt.shadowMap.enabled=!0;Pt.shadowMap.type=nh;ye("app").appendChild(Pt.domElement);var gt=new xo;gt.fog=new pr(13623523,60,230);var Gt=new kt(55,innerWidth/innerHeight,.1,900),ru=new wr(14676479,5925690,1.25);gt.add(ru);var Rn=new Er(16773590,2.6);Rn.position.set(30,50,20);Rn.castShadow=!0;var Ff=Cs.low?1024:2048;Rn.shadow.mapSize.set(Ff,Ff);var kr=Rn.shadow.camera,ac=Cs.low?22:30;kr.left=-ac;kr.right=ac;kr.top=ac;kr.bottom=-ac;kr.near=1;kr.far=140;Rn.shadow.bias=-6e-4;Rn.shadow.normalBias=.04;gt.add(Rn,Rn.target);addEventListener("resize",()=>{Pt.setSize(innerWidth,innerHeight),Gt.aspect=innerWidth/innerHeight,Gt.updateProjectionMatrix()});var E={mode:"story",stage:"intro",zone:"world",hero:"chrisler",phase:"loading",hearts:5,maxHearts:5,charm:!1,basket:0,stones:0,stonesQuest:0,murkaQuest:0,metRowan:!1,metSisu:0,titan:0,fight:0,gateOpen:!1,ended:!1,talking:null,log:[]};window.__ML={S:E,ready:!1};var ct=new Yo,mt=new Ko,$o=new jo,Wt,Ie,ve,gn={},Rs=[],ts=[],_a=[],xa=[],Gf=[],gv={chrisler:{name:"Chrisler",h:1.86,r:.38,walk:2.1,run:5.2,accel:7,atkR:3.3,dmg:1,voiceGo:"chrisler_go",voiceWin:"chrisler_win"},beni_titan:{name:"Beni in TITAN",h:3.4,r:.75,walk:2.5,run:6.8,accel:3.2,atkR:5.6,dmg:2,heavy:!0,voiceGo:"beni_go",voiceWin:"beni_win"},ezra:{name:"Ezra",h:1.42,r:.3,walk:2.1,run:5.3,accel:8,atkR:3,dmg:1,voiceGo:"ezra_go",voiceWin:"ezra_win"},beni_foot:{name:"Beni",h:1.5,r:.32,walk:2,run:5.1,accel:8,atkR:2.6,dmg:1,voiceGo:"b_obj",voiceWin:"beni_win"}};function It(i,e){return E.zone==="cave"?Ie.groundAt(i,e):Wt.groundAt(i,e)}function ga(i,e){ye("lbar").style.width=Math.round(i*100)+"%",e&&(ye("lmsg").textContent=e)}async function bv(i){let e=await Ho(i),t=gv[i],n=await Ho(i+"_run"),s=ff(e.scene),r=n.animations.find(_=>_.name==="Running")||n.animations[0],a=e.animations.find(_=>/Walking/.test(_.name))||null;s.traverse(_=>{_.isMesh&&(_.castShadow=!0,_.receiveShadow=!1,_.frustumCulled=!1)});let o=Cf(r,s,a),c={walk:qo(s,o.walk),run:qo(s,o.run),idle:qo(s,o.idle)},l=new vs(s);l.clipAction(o.idle).play(),l.setTime(.1),s.updateMatrixWorld(!0);let h=s.getObjectByName("mixamorigHeadTop_End"),u=h?h.getWorldPosition(new A).y:1.95;l.stopAllAction(),l.uncacheRoot(s);let d=t.h/u,f=new ot;f.add(s),s.scale.setScalar(d);let g=new ot;g.add(f),g.name="hero_"+i;let x=new Xo(s,o,{walk:c.walk.speed,run:c.run.speed},d);x.natural={walk:t.walk,run:t.run},x.clipNatural={walk:c.walk.speed*d,run:c.run.speed*d};let m=_=>(c.run.minFootY-c[_].minFootY)*d;return x.footOffset={idle:m("idle"),walk:m("walk"),run:m("run"),attack:m("idle")},{id:i,cfg:t,holder:g,vis:f,root:s,loco:x,clips:o,scale:d,speeds:{walk:t.walk,run:t.run},measured:{walkLocal:c.walk.speed,runLocal:c.run.speed,scale:d,naturalWalk:x.natural.walk,naturalRun:x.natural.run,headY:u},clipInfo:{source:[...e.animations,...n.animations].map(_=>({name:_.name,duration:+_.duration.toFixed(3),tracks:_.tracks.length})),derived:Object.values(o).map(_=>({name:_.name,duration:+_.duration.toFixed(3)}))}}}function cu(i){let e=i.loco.actions,t=0,n=0;for(let s of["idle","walk","run","attack"]){let r=e[s].getEffectiveWeight()*(e[s].isRunning()?1:0);t+=r,n+=r*i.loco.footOffset[s]}return t>0?n/t:0}function xv(i,e="#ffe9a3"){let t=document.createElement("canvas");t.width=512,t.height=96;let n=t.getContext("2d");n.font="bold 44px Trebuchet MS";let s=Math.min(500,n.measureText(i).width+40);n.fillStyle="rgba(16,32,26,0.78)",n.beginPath(),n.roundRect((512-s)/2,14,s,64,30),n.fill(),n.fillStyle=e,n.textAlign="center",n.textBaseline="middle",n.fillText(i,256,47);let r=new hn(t);r.colorSpace=it;let a=new gr(new gs({map:r,depthWrite:!1,transparent:!0}));return a.scale.set(2.4,.45,1),a.renderOrder=5,a}function _v(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d");e.fillStyle="#ffd25a",e.strokeStyle="#5a3a0a",e.lineWidth=8,e.font="bold 110px Trebuchet MS",e.textAlign="center",e.textBaseline="middle",e.strokeText("!",64,68),e.fillText("!",64,68);let t=new hn(i);t.colorSpace=it;let n=new gr(new gs({map:t,depthWrite:!1,transparent:!0}));return n.scale.set(.7,.7,1),n}var vv=[{id:"rowan",model:"villager",name:"Rowan",h:1.8,x:4.2,z:36,face:Math.PI},{id:"murka",model:"villager_woman",name:"Murka",h:1.68,x:4.6,z:-3.6,face:-2.2},{id:"orren",model:"builder",name:"Orren the Builder",h:1.76,x:26.5,z:-3.2,face:-1.6},{id:"titan",model:"titan_standing",name:"TITAN",h:3,x:5.2,z:K.bridge.z+7.5,face:-1.2,classicOnly:!0}];async function yv(){for(let i of vv){let e=await Xt(i.model,{height:i.h}),t=new ot;for(let a of e.parts){let o=new Ue(a.geometry,a.material);o.castShadow=!0,t.add(o)}let n=new ot;n.add(t),n.position.set(i.x,It(i.x,i.z),i.z),n.rotation.y=i.face,gt.add(n);let s=xv(i.name);s.position.y=i.h+.45,n.add(s);let r=_v();r.position.y=i.h+1,n.add(r),Rs.push({...i,holder:n,body:t,mk:r,baseFace:i.face,r:i.id==="titan"?1:.45})}}function Ri(i){return Rs.find(e=>e.id===i)}var Of={};function si(i,e){let t=Of[i];if(!t){let s=document.createElement("canvas");s.width=s.height=64;let r=s.getContext("2d"),a=r.createRadialGradient(32,32,0,32,32,32);a.addColorStop(0,i),a.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=a,r.fillRect(0,0,64,64),t=Of[i]=new hn(s)}let n=new gr(new gs({map:t,blending:fs,depthWrite:!1,transparent:!0}));return n.scale.setScalar(e),n}async function Mv(){let i=await Xt("basket_b4",{height:.55}),e=new ot;for(let a of i.parts){let o=new Ue(a.geometry,a.material);o.castShadow=!0,e.add(o)}let t=-47,n=-6;e.position.set(t,It(t,n),n),gt.add(e);let s=si("rgba(255,220,120,0.9)",1.6);s.position.y=.4,e.add(s),ts.push({id:"basket",obj:e,x:t,z:n,active:()=>E.murkaQuest===1&&!E.basket,take:()=>{E.basket=1,Sv(e),Cn("n_basket"),Kt("You found the golden basket!")}}),e.userData.base=i,[[13,K.streamZ(13)+4.6],[-28.5,9.5],[41,-8.5]].forEach(([a,o],c)=>{let l=new ot,h=new Ue(new _s(.28,0),new Ct({color:10475775,emissive:5223679,emissiveIntensity:1.6,roughness:.2,metalness:.1,flatShading:!0}));h.scale.y=1.6,l.add(h);let u=si("rgba(140,210,255,0.95)",2.2);l.add(u),l.position.set(a,It(a,o)+.75,o),l.visible=!1,gt.add(l),ts.push({id:"stone"+c,obj:l,x:a,z:o,spin:h,active:()=>E.stonesQuest===1,take:()=>{E.stones++,l.visible=!1,Cn("n_st"+E.stones),Kt("Star stone "+E.stones+" / 3"),E.stones>=3&&(E.stonesQuest=2),wt()}})})}function Sv(i){let e=ve.root.getObjectByName("mixamorigRightHand");e&&(i.removeFromParent(),e.add(i),i.children.filter(t=>t.isSprite).forEach(t=>t.visible=!1),i.position.set(0,.05/ve.scale,.05/ve.scale),i.scale.setScalar(.8/ve.scale),i.rotation.set(0,0,Math.PI))}var lu=[{id:"m1",name:"Hooded Shadow",model:"minion_hooded",h:1.9,hp:6,speed:1.6,tint:null,dark:.55,ringR:2.1,wind:1,line:"n_m1",dline:"n_m1d",smoke:2761024},{id:"m2",name:"Smoky Shadow",model:"minion_smoky",h:2.8,hp:10,speed:1.9,tint:null,dark:.6,ringR:2.6,wind:.9,line:"n_m2",dline:"n_m2d",smoke:5921376},{id:"hoof",name:"Hoofkoff",model:"hoofkoff_b4",h:3.1,hp:14,speed:1.5,tint:null,dark:1,ringR:3.3,wind:.85,line:"hoof1",dline:"hoof4",smoke:6950944,boss:!0}],Wf={};async function wv(){for(let i of lu)Wf[i.id]=await Xt(i.model,{height:1})}function Xf(i){let e=lu[i],t=new ot,n=[];for(let h of Wf[e.id].parts){let u=h.material.clone();u.transparent=!0,e.tint&&(u.color=e.tint.clone().multiplyScalar(1.6),u.emissive=e.tint.clone().multiplyScalar(.15)),n.push(u);let d=new Ue(h.geometry,u);d.castShadow=!0,t.add(d)}t.scale.setScalar(e.h);let s=new ot;s.add(t);let r=0,a=-38;s.position.set(r,It(r,a)-e.h,a),gt.add(s);let o=new Ue(new aa(.85,1,48),new Ht({color:16734810,transparent:!0,opacity:0,depthWrite:!1}));o.rotation.x=-Math.PI/2,gt.add(o);let c=[];for(let h=0;h<(Cs.low?8:14);h++){let u=si(`rgba(${e.smoke>>16&255},${e.smoke>>8&255},${e.smoke&255},0.75)`,e.h*.9);u.material.blending=Hi,s.add(u),c.push({s:u,a:Math.random()*6,r:.3+Math.random()*.5,y:Math.random()})}let l={d:e,holder:s,grp:t,mats:n,ring:o,smoke:c,hp:e.hp,state:"rise",t:0,flash:0,x:r,z:a,cool:1.5};return _a.push(l),Cn(e.line),e.boss&&(ye("bossbar").classList.remove("hidden"),ye("bossbar").querySelector(".bn").textContent=e.name),l}function hu(i,e,t=16769162){let n=new Ue(new aa(.2,.45,48),new Ht({color:t,transparent:!0,opacity:.9,depthWrite:!1,side:Nt,blending:fs}));n.rotation.x=-Math.PI/2,n.position.copy(i).add(new A(0,.15,0)),gt.add(n);let s=[];for(let r=0;r<18;r++){let a=si("rgba(255,230,140,1)",.5);a.position.copy(i).add(new A(0,1,0));let o=Math.random()*Math.PI*2;a.userData.v=new A(Math.cos(o)*e*1.4,1+Math.random()*2,Math.sin(o)*e*1.4),gt.add(a),s.push(a)}xa.push({t:0,dur:.55,update(r,a){let o=a/this.dur;n.scale.setScalar(1+o*e*2.4),n.material.opacity=.9*(1-o);for(let c of s)c.position.addScaledVector(c.userData.v,r),c.userData.v.y-=4*r,c.material.opacity=1-o},end(){n.removeFromParent(),s.forEach(r=>r.removeFromParent())}})}function uu(i,e=40,t="rgba(200,180,255,1)"){let n=[];for(let s=0;s<e;s++){let r=si(t,.4+Math.random()*.4);r.position.copy(i).add(new A((Math.random()-.5)*1.5,Math.random()*2.5,(Math.random()-.5)*1.5)),r.userData.v=new A((Math.random()-.5)*1.5,1+Math.random()*2.5,(Math.random()-.5)*1.5),gt.add(r),n.push(r)}xa.push({t:0,dur:1.8,update(s,r){for(let a of n)a.position.addScaledVector(a.userData.v,s),a.material.opacity=1-r/this.dur},end(){n.forEach(s=>s.removeFromParent())}})}var ec=0;function Kt(i,e=2.6){let t=ye("toast");t.textContent=i,t.classList.remove("hidden"),ec=e}function ic(){ye("hearts").textContent="\u2764".repeat(Math.max(0,E.hearts))+"\u2661".repeat(Math.max(0,E.maxHearts-E.hearts))}function Ev(){if(E.mode==="story"&&E.stage!=="village")return Hv();let i=[];if(E.mode==="story"&&i.push({t:"Return to Meadowlight with TITAN",done:!0}),i.push({t:"Talk to Murka at the well",done:E.murkaQuest>0}),E.murkaQuest>=1&&i.push({t:E.basket?"Bring the basket back to Murka":"Find Murka's basket on the west forest path",done:E.murkaQuest>=2}),i.push({t:"Talk to Orren at the Council Hall",done:E.stonesQuest>0}),E.stonesQuest>=1&&i.push({t:E.stonesQuest>=2?"Return the star stones to Orren":`Find 3 glowing star stones (${E.stones}/3)`,done:E.stonesQuest>=3}),E.murkaQuest>=2&&E.stonesQuest>=3&&i.push(E.mode==="story"?{t:"Go to the bridge \u2014 the shadows are waiting",done:E.fight>=1}:{t:"Talk to TITAN at the bridge",done:E.titan>=2}),E.fight>=1){let e=["Defeat the hooded shadow","Defeat the smoky shadow","Defeat Hoofkoff"];for(let t=0;t<3;t++)E.fight>=t+1&&i.push({t:e[t],done:E.fight>t+1||E.gateOpen})}return E.gateOpen&&i.push({t:"Walk through the castle gate",done:E.ended}),i}function wt(){ye("qlist").innerHTML=Ev().map(i=>`<li class="${i.done?"done":""}">${i.t}</li>`).join("")}function Cn(i){E.talking||ct.play(i),E.log.push("line:"+i)}function qt(i,e,t){E.talking={ids:e,i:-1,done:t,speakerName:i},document.body.classList.add("talking"),ye("dialog").classList.remove("hidden"),ye("prompt").classList.add("hidden"),ya()}function ya(){let i=E.talking;if(!i)return;if(ct.stop(),i.i++,i.i>=i.ids.length){E.talking=null,document.body.classList.remove("talking"),ye("dialog").classList.add("hidden");let o=i.done;o&&o(),wt();return}let e=i.ids[i.i],n=ct.line(e)?.character||"",s={chrisler:tu.label}[n]||"";ye("dialog").querySelector(".dn").textContent={murka:"Murka",orren:"Orren the Builder",rowan:"Rowan",sisu:"Little Sisu",titan:"TITAN",hoofkoff:"Hoofkoff",narrator:"Narrator",chrisler:"Chrisler",beni:"Beni",ezra:"Ezra"}[n]||i.speakerName,ye("dialog").querySelector(".dl").textContent=s;let r=ct.text(e).split(" ");ye("dialog").querySelector(".dt").innerHTML=r.map((o,c)=>`<span class="w on" data-k="${c}">${o}</span>`).join(" "),E.log.push("dialog:"+e);let a=i.i;ct.play(e).then(o=>{E.talking===i&&i.i===a&&!o?.skipped&&setTimeout(()=>{E.talking===i&&i.i===a&&ya()},700)})}function qf(i){if(i.talkT=2.5,E.talkNpc=i,ve){let e=ve.holder.position,t=i.holder.position;ve.holder.rotation.y=Math.atan2(t.x-e.x,t.z-e.z)}if(i.id==="rowan"){let e=E.titan>=2?["rowan4"]:E.metRowan?["rowan3"]:["rowan1","rowan2","rowan3"];qt("Rowan",e,()=>{E.metRowan=!0})}if(i.id==="sisu"&&qt("Little Sisu",E.metSisu?["sisu3"]:["sisu1","sisu2"],()=>E.metSisu=1),i.id==="murka"&&(E.murkaQuest===0?qt("Murka",["murka1","murka2","murka3"],()=>{E.murkaQuest=1}):E.murkaQuest===1&&!E.basket?qt("Murka",["murka4"]):E.murkaQuest===1&&E.basket?qt("Murka",["murka5","murka6"],()=>{E.murkaQuest=2,E.charm=!0;let e=ts.find(t=>t.id==="basket").obj;e.removeFromParent(),e.position.set(.5,0,.35),e.scale.setScalar(1),e.rotation.set(0,0,0),Ri("murka").holder.add(e),Kt("Star charm: your star-burst is stronger!")}):qt("Murka",["murka6"])),i.id==="orren"&&(E.stonesQuest===0?qt("Orren",["orren1","orren2","orren3"],()=>{E.stonesQuest=1,ts.filter(e=>e.id.startsWith("stone")).forEach(e=>e.obj.visible=!0)}):E.stonesQuest===1?qt("Orren",["orren4"]):E.stonesQuest===2?qt("Orren",["orren5",E.mode==="story"?"orren6b":"orren6"],()=>{E.stonesQuest=3}):qt("Orren",[E.mode==="story"?"orren6b":"orren6"])),i.id==="titan"){if(E.titan>=2)return;E.murkaQuest>=2&&E.stonesQuest>=3?qt("TITAN",["titan1","titan3","titan4"],()=>{E.titan=2,Tv(),setTimeout(()=>oc(0),1500)}):qt("TITAN",["titan1","titan2"],()=>{E.titan=1})}}function Tv(){let i=Ri("titan");i.moveTo=new A(4.2,0,K.bridge.z-8.5)}function oc(i){E.fight=i+1,Xf(i),wt()}var Un={},tc=!1,An={x:0,y:0,active:!1,id:null};addEventListener("keydown",i=>{Un[i.code]=!0,E.phase==="play"&&((i.code==="KeyE"||i.code==="Enter")&&pu(),i.code==="Space"&&(i.preventDefault(),mu()),i.code==="Escape"&&du())});addEventListener("keyup",i=>Un[i.code]=!1);var Dr=ye("stick"),Yf=ye("knob");function jf(i){let e=Dr.getBoundingClientRect(),t=i.clientX-(e.left+e.width/2),n=i.clientY-(e.top+e.height/2),s=Math.hypot(t,n),r=e.width/2;s>r&&(t*=r/s,n*=r/s),An.x=t/r,An.y=n/r,Yf.style.transform=`translate(${t}px,${n}px)`}Dr.addEventListener("pointerdown",i=>{An.active=!0,An.id=i.pointerId,Dr.setPointerCapture(i.pointerId),jf(i),ct.unlock()});Dr.addEventListener("pointermove",i=>{An.active&&i.pointerId===An.id&&jf(i)});var Kf=i=>{i.pointerId===An.id&&(An.active=!1,An.x=An.y=0,Yf.style.transform="")};Dr.addEventListener("pointerup",Kf);Dr.addEventListener("pointercancel",Kf);ye("bAtk").addEventListener("pointerdown",i=>{i.preventDefault(),mu()});ye("bTalk").addEventListener("pointerdown",i=>{i.preventDefault(),pu()});ye("bRun").addEventListener("pointerdown",i=>{i.preventDefault(),tc=!tc,ye("bRun").classList.toggle("on",tc)});ye("dialog").addEventListener("pointerdown",i=>{i.preventDefault(),ya()});ye("bMenu").addEventListener("pointerdown",i=>{i.preventDefault(),du()});var st={yaw:Math.PI,pitch:.38,dist:7.5,tYaw:Math.PI},Ts=new Map;Pt.domElement.addEventListener("pointerdown",i=>{Ts.set(i.pointerId,{x:i.clientX,y:i.clientY}),ct.unlock()});addEventListener("pointermove",i=>{let e=Ts.get(i.pointerId);if(e){if(Ts.size===1)st.yaw-=(i.clientX-e.x)*.006,st.pitch=$n.clamp(st.pitch+(i.clientY-e.y)*.004,.08,1.2),st.manualT=2.5;else if(Ts.size===2){let t=[...Ts.entries()].find(([r])=>r!==i.pointerId)[1],n=Math.hypot(e.x-t.x,e.y-t.y),s=Math.hypot(i.clientX-t.x,i.clientY-t.y);st.dist=$n.clamp(st.dist*n/Math.max(s,1),3.5,16)}e.x=i.clientX,e.y=i.clientY}});addEventListener("pointerup",i=>Ts.delete(i.pointerId));addEventListener("pointercancel",i=>Ts.delete(i.pointerId));Pt.domElement.addEventListener("wheel",i=>{st.dist=$n.clamp(st.dist*(1+i.deltaY*.001),3.5,16)},{passive:!0});function du(){ye("menu").classList.toggle("hidden"),E.paused=!ye("menu").classList.contains("hidden")}ye("mResume").onclick=du;ye("mVoice").onclick=()=>{ct.enabled=!ct.enabled,ct.enabled||ct.stop(),ye("mVoice").textContent="Voices: "+(ct.enabled?"on":"off")};ye("mQuality").onclick=()=>{let i=Pt.getPixelRatio();Pt.setPixelRatio(i>1?1:Math.min(devicePixelRatio,2)),ye("mQuality").textContent="Resolution: "+(Pt.getPixelRatio()>1?"high":"battery saver")};ye("mRestart").onclick=()=>location.reload();ye("eAgain").onclick=()=>location.reload();ye("credits").textContent=`Credits
Story and storyboard: TITAN Awakens (12-scene opening) by Chris Belluzzi.
3D models: Chris Belluzzi's Meshy library (Beni / Young Adventurer, Beni in TITAN / Starheart Sentinel, giant TITAN / Copper Sentinel, Crystalstar cave entrance, Chrisler, Ezra, cottages, Council Building, castle gate, walls, trees, rocks, signpost, basket, Female Villager, Hooded and Smoky minions, Hoofkoff, well, cobblestone tiles, villagers). Cave interior: procedural.
Sound effects and music bed: procedural (generated for this build).
Ground textures: ambientCG (CC0).
Voices: Kokoro-82M (Apache-2.0); Piper voices Alba (CC BY 4.0, credit: Alba voice dataset), Joe (CC0). Engine: voice_audio_engine v1.0.
Chrisler: `+tu.label+`.
Three.js (MIT).`;function fu(){if(!ve)return null;let i=ve.holder.position,e=null,t=1e9;if(E.zone==="world"){for(let n of Rs){if(!n.holder.parent)continue;let s=Math.hypot(n.holder.position.x-i.x,n.holder.position.z-i.z)-n.r;s<2.6&&s<t&&(t=s,e={type:"npc",n,label:"Talk to "+n.name,verb:"Talk"})}for(let n of ts){if(!n.active()||!n.obj.parent||n.obj.parent!==gt||!n.obj.visible)continue;let s=Math.hypot(n.x-i.x,n.z-i.z);s<2&&s<t&&(t=s,e={type:"item",it:n,label:n.id==="basket"?"Pick up the golden basket":"Take the star stone",verb:n.id==="basket"?"Pick up":"Take"})}}for(let n of Gf){if(n.zone!==E.zone||!n.active())continue;let s=n.pos(),r=Math.hypot(s.x-i.x,s.z-i.z)-n.r-(ve.cfg.r-.3);r<0&&r-.5<t&&(t=r-.5,e={type:"spot",sp:n,label:n.label(),verb:n.verb()})}return e}function pu(){if(E.talking){ya();return}if(E.phase!=="play")return;let i=fu();i&&(E.log.push("interact:"+i.label),i.type==="npc"?qf(i.n):i.type==="spot"?i.sp.act():i.it.take(),wt())}var sc=0;function mu(){if(E.phase!=="play"||E.talking||sc>0)return;sc=ve.cfg.heavy?.85:.6,ve.loco.attack(),ve.cfg.heavy&&setTimeout(()=>{ns(.5),mt.play("stomp",.9,.8)},120);let i=ve.holder.position,e=new A(Math.sin(ve.holder.rotation.y),0,Math.cos(ve.holder.rotation.y));setTimeout(()=>{hu(i.clone().addScaledVector(e,.6),ve.cfg.atkR*.5,E.charm?16773280:12575743);for(let t of _a){if(t.state==="dead"||t.state==="rise")continue;let n=t.holder.position.x-i.x,s=t.holder.position.z-i.z,r=Math.hypot(n,s),a=(n*e.x+s*e.z)/(r||1);if(r<ve.cfg.atkR+t.d.h*.25&&a>-.2){let o=ve.cfg.dmg+(E.charm?1:0);t.hp-=o,t.flash=.25,t.knock=new A(n,0,s).normalize().multiplyScalar(2.5),E.log.push("hit:"+t.d.id+":"+t.hp),t.d.boss&&t.hp<=t.d.hp/2&&!t.saidHalf&&(t.saidHalf=1,ct.play("hoof3")),t.hp<=0&&Zf(t)}}if(E.zone==="cave"&&jt&&jt.alive){let t=jt.mesh.position;Math.hypot(t.x-i.x,t.z-i.z)<ve.cfg.atkR+2.6&&$v()}},110)}function Zf(i){i.state="dead",i.t=0,i.ring.material.opacity=0,uu(i.holder.position.clone(),i.d.boss?80:45,i.d.boss?"rgba(255,190,120,1)":"rgba(200,180,255,1)"),ct.play(i.d.dline);let e=lu.indexOf(i.d);e<2?setTimeout(()=>oc(e+1),3500):setTimeout(()=>{ye("bossbar").classList.add("hidden"),E.fight=4,Av()},3200)}function Av(){E.gateOpen=!0,wt(),Cn("n_win1"),setTimeout(()=>Cn("n_win2"),6500),Ai.userData.opening=!0,Wt.colliders.splice(Wt.colliders.indexOf(au),1),Kt("The castle gate is open!")}function Rv(i){if(E.invuln>0||E.phase!=="play")return;E.hearts--,E.invuln=1.2,ic();let e=ve.holder.position,t=new A(e.x-i.x,0,e.z-i.z).normalize().multiplyScalar(3.5);E.knock=t,Jf(),E.hearts<=0&&(E.phase="rest",ct.play("n_rest"),Kt("Oof! Rest a moment\u2026",3),setTimeout(()=>{E.hearts=E.maxHearts,ic(),ve.holder.position.set(0,It(0,K.bridge.z+7),K.bridge.z+7),E.phase="play"},3e3))}function Jf(i="rgba(255,80,80,.25)"){let e=document.createElement("div");e.style.cssText="position:fixed;inset:0;background:"+i+";pointer-events:none;z-index:9;transition:opacity .4s",document.body.appendChild(e),setTimeout(()=>e.style.opacity=0,50),setTimeout(()=>e.remove(),500)}var Ai,au;function Cv(){let i=new ln({transparent:!0,depthWrite:!1,side:Nt,uniforms:{t:{value:0},o:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"uniform float t,o; varying vec2 vUv; void main(){ float w=sin(vUv.y*30.-t*3.)*0.5+0.5; float e=smoothstep(0.,0.15,vUv.x)*smoothstep(1.,0.85,vUv.x); vec3 c=mix(vec3(0.45,0.3,0.9),vec3(0.75,0.6,1.),w); gl_FragColor=vec4(c,(0.35+0.25*w)*e*o); }"});Ai=new Ue(new Mn(3.6,4.6),i);let e=It(K.gate.x,K.gate.z);Ai.position.set(K.gate.x,e+2.3,K.gate.z-.6),gt.add(Ai),au={seg:[K.gate.x-2.2,K.gate.z-.6,K.gate.x+2.2,K.gate.z-.6],r:.5},Wt.colliders.push(au)}var Gy=new A;function Pv(i,e){if(E.zone==="cave"){zf(i,e,Ie.colliders),Ie.constrain(i,e);return}zf(i,e,Wt.colliders);for(let s of Rs){if(!s.holder.parent)continue;let r=i.x-s.holder.position.x,a=i.z-s.holder.position.z,o=Math.hypot(r,a),c=s.r+e;o<c&&o>1e-5&&(i.x=s.holder.position.x+r/o*c,i.z=s.holder.position.z+a/o*c)}let t=Wt.bounds,n=(i.x/t.rx)**2+(i.z/t.rz)**2;if(n>1){let s=1/Math.sqrt(n);i.x*=s,i.z*=s}i.z<K.gate.z-.5&&!E.gateOpen&&(i.z=K.gate.z-.5)}function zf(i,e,t){for(let n of t)if(n.seg){let[s,r,a,o]=n.seg,c=a-s,l=o-r,h=Math.max(0,Math.min(1,((i.x-s)*c+(i.z-r)*l)/(c*c+l*l||1))),u=s+c*h,d=r+l*h,f=i.x-u,g=i.z-d,x=Math.hypot(f,g),m=n.r+e;x<m&&x>1e-5&&(i.x=u+f/x*m,i.z=d+g/x*m)}else{let s=i.x-n.x,r=i.z-n.z,a=Math.hypot(s,r),o=n.r+e;a<o&&a>1e-5&&(i.x=n.x+s/a*o,i.z=n.z+r/a*o)}}function Iv(i){let e=ve,t=e.holder.position,n=t.clone(),s=0,r=0;E.phase==="play"&&!E.talking&&!E.paused&&!E.cut&&(s=(Un.KeyD||Un.ArrowRight?1:0)-(Un.KeyA||Un.ArrowLeft?1:0)+An.x,r=(Un.KeyS||Un.ArrowDown?1:0)-(Un.KeyW||Un.ArrowUp?1:0)+An.y),window.__ML.autoInput&&(s=window.__ML.autoInput.x,r=window.__ML.autoInput.z);let a=Math.min(1,Math.hypot(s,r)),o=Un.ShiftLeft||Un.ShiftRight||tc||An.active&&a>.92||window.__ML.autoInput?.run,c=new A(-Math.sin(st.yaw),0,-Math.cos(st.yaw)),l=new A(-c.z,0,c.x),h=new A().addScaledVector(l,s).addScaledVector(c,-r);h.lengthSq()>1e-4&&h.normalize();let u=a<.08?0:o?e.speeds.run:e.speeds.walk*(.55+.45*a);e.vel=e.vel||new A;let d=h.multiplyScalar(u);e.vel.lerp(d,1-Math.exp(-i*(u>e.vel.length()?e.cfg.accel:e.cfg.accel*1.4))),t.addScaledVector(e.vel,i),E.knock&&(t.addScaledVector(E.knock,i),E.knock.multiplyScalar(Math.exp(-i*6)),E.knock.length()<.05&&(E.knock=null)),E.zone==="world"&&Wt.blockedByStream(t.x,t.z)&&(t.x=n.x,t.z=n.z),Pv(t,e.cfg.r);let f=Math.hypot(t.x-n.x,t.z-n.z)/Math.max(i,1e-4);if(e.actualSpeed=f,e.vel.lengthSq()>.05){let m=Math.atan2(e.vel.x,e.vel.z)-e.holder.rotation.y;m=Math.atan2(Math.sin(m),Math.cos(m)),e.holder.rotation.y+=m*(1-Math.exp(-i*12))}let g=It(t.x,t.z);if(t.y+=(g-t.y)*(1-Math.exp(-i*25)),e.loco.update(i,f),e.cfg.heavy&&Bv(e,i),e.vis.position.y=cu(e),st.manualT=Math.max(0,(st.manualT||0)-i),f>.5&&st.manualT<=0&&!rc){let x=e.holder.rotation.y+Math.PI-st.yaw;x=Math.atan2(Math.sin(x),Math.cos(x)),st.yaw+=x*i*.8}}function Lv(i){if(i.y-It(i.x,i.z)>8)return!1;if(E.zone==="world"&&ws&&Math.hypot(i.x-K.cave.x,i.z-K.cave.z)<8.4&&i.y<ws.position.y+8)return!0;for(let e of Wt.colliders)if(!(e.r<1.2)){if(e.seg){let[t,n,s,r]=e.seg,a=s-t,o=r-n,c=Math.max(0,Math.min(1,((i.x-t)*a+(i.z-n)*o)/(a*a+o*o||1)));if(Math.hypot(i.x-t-a*c,i.z-n-o*c)<e.r+.5)return!0}else if(Math.hypot(i.x-e.x,i.z-e.z)<e.r+.5)return!0}return!1}function Dv(i){if(E.camOverride){let h=E.camOverride(i);Gt.position.lerp(h.pos,1-Math.exp(-i*(h.k||3))),Gt.lookAt(h.look),Bf(i);return}let e=ve.holder.position,t=ve.cfg.h,n=new A(e.x,e.y+t*.75,e.z),s=st.dist*(ve.id==="beni_titan"?1.35:ve.id==="beni_foot"?.9:1),r=st.yaw,a=st.pitch;if(E.talking&&E.talkNpc){let h=E.talkNpc.holder.position;n=new A((e.x+h.x)/2,Math.max(e.y+t*.7,h.y+E.talkNpc.h*.7),(e.z+h.z)/2);let u=Math.atan2(e.x-h.x,e.z-h.z);(E._talkYaw==null||E._talkFor!==E.talkNpc)&&(E._talkFor=E.talkNpc,E._talkYaw=u+1.15),r=E._talkYaw,a=.22,s=Math.max(5.5,Math.hypot(e.x-h.x,e.z-h.z)*1.6+E.talkNpc.h*1.2)}else E._talkFor=null;let o=new A(Math.sin(r)*Math.cos(a),Math.sin(a),Math.cos(r)*Math.cos(a)).multiplyScalar(s),c=n.clone().add(o);if(E.zone==="cave"){for(let u=0;u<24&&Ie.wd(c.x,c.z)>-.5;u++)c.lerp(n,.15);let h=Ie.inChamber(c.x,c.z)?16:It(e.x,e.z)+4.6;c.y>h&&(c.y=h)}else for(let h=0;h<24&&Lv(c);h++)c.lerp(n,.12);let l=It(c.x,c.z)+.6;c.y<l&&(c.y=l),Gt.position.lerp(c,1-Math.exp(-i*10)),Gt.lookAt(n),Bf(i)}function kv(i,e){for(let t of _a){t.t+=i;let n=t.holder.position;for(let h of t.smoke)h.a+=i*.8,h.s.position.set(Math.cos(h.a)*h.r,.3+(h.y+e*.25)%1*t.d.h*.9,Math.sin(h.a)*h.r),h.s.material.opacity=.55*(1-(h.y+e*.25)%1);if(t.flash>0){t.flash-=i;for(let h of t.mats)h.emissive&&h.emissive.setRGB(1.2*(t.flash>0),1*(t.flash>0),.6*(t.flash>0))}else for(let h of t.mats)h.emissive&&h.emissive.copy(t.d.tint?t.d.tint.clone().multiplyScalar(.15):new we(0));let s=It(n.x,n.z);if(t.state==="rise"){n.y=s-t.d.h*(1-Math.min(1,t.t/1.6)),t.t>1.6&&(t.state="approach",t.t=0,t.d.boss&&setTimeout(()=>ct.play("hoof2"),4500));continue}if(t.state==="dead"){for(let h of t.mats)h.opacity=Math.max(0,1-t.t/1.4);n.y=s+t.t*.8,t.grp.scale.setScalar(t.d.h*(1+t.t*.2)),t.t>1.5&&t.holder.parent&&(t.holder.removeFromParent(),t.ring.removeFromParent());continue}t.knock&&(n.addScaledVector(t.knock,i),t.knock.multiplyScalar(Math.exp(-i*6)),t.knock.length()<.05&&(t.knock=null));let r=ve.holder.position,a=r.x-n.x,o=r.z-n.z,c=Math.hypot(a,o);t.holder.rotation.y=Math.atan2(a,o);let l=t.d.boss?Math.abs(Math.sin(e*2.2))*.12:.25+Math.sin(e*2.5)*.12;if(n.y=s+l,t.state==="approach"){let h=t.d.ringR*.75;if(c>h){let u=t.d.speed*(E.phase==="play"?1:0);n.x+=a/c*u*i,n.z+=o/c*u*i}t.cool-=i,c<t.d.ringR+.6&&t.cool<=0&&(t.state="windup",t.t=0)}else if(t.state==="windup"){let h=Math.min(1,t.t/t.d.wind);t.ring.position.set(n.x,s+.08,n.z),t.ring.scale.setScalar(t.d.ringR*h),t.ring.material.opacity=.35+.4*h,t.grp.rotation.x=-.15*h,t.t>=t.d.wind&&(t.ring.material.opacity=0,t.grp.rotation.x=.2,c<t.d.ringR+ve.cfg.r&&Rv(n),hu(n.clone(),t.d.ringR*.45,16738922),t.state="recover",t.t=0)}else t.state==="recover"&&(t.grp.rotation.x*=.9,t.t>1.3&&(t.state="approach",t.cool=.8+Math.random()*.8,t.t=0));n.z=Math.min(n.z,K.bridge.z-6),n.z=Math.max(n.z,K.gate.z+3),n.x=$n.clamp(n.x,-18,18),t.d.boss&&(ye("bossbar").querySelector(".bf").style.width=Math.max(0,t.hp/t.d.hp*100)+"%")}}var Nv=+(es.get("dtmax")||.05),Uv=new ko,Tn=0,nc=[],ba=0;function Qf(){let i=Uv.getDelta(),e=Math.min(Nv,i);Tn+=e,nc.push(i),nc.length>600&&nc.shift(),eu.value=Tn;for(let t of Wt.updates)t(Tn);if(Ai&&(Ai.material.uniforms.t.value=Tn,Ai.userData.opening&&(Ai.material.uniforms.o.value=Math.max(0,Ai.material.uniforms.o.value-e*.5))),E.phase==="title"||E.phase==="cine"&&!ve){ba+=e*.04;let t=30,n=6,s=30;Gt.position.set(n+Math.sin(ba)*4,Wt.groundAt(n,s)+7,s+Math.cos(ba)*2),Gt.lookAt(K.andor.x*.6,28,K.andor.z*.6)}else if(E.phase==="select"){for(let a in gn)gn[a].holder.parent&&gn[a].loco.update(e,0);ba+=e*.05;let t=Gt.aspect<1,n={ezra:-2.2,chrisler:0,beni_titan:2.6};E._selX=(E._selX??0)+((t?n[E.hero]:.2)-(E._selX??0))*Math.min(1,e*4);let s=It(0,6),r=t?7.2:9;Gt.position.set(E._selX+Math.sin(.25+Math.sin(ba)*.12)*r,s+(t?2:2.4),6+Math.cos(.25)*r*.6),Gt.lookAt(E._selX,s+(t?1:1.3),6)}else if(ve){E.paused||(Iv(e),kv(e,Tn),ey(e,Tn)),Dv(e),sc-=e,E.invuln=Math.max(0,(E.invuln||0)-e);for(let s of Rs){s.body.position.y=Math.sin(Tn*1.6+s.x)*.01,s.body.scale.y=1+Math.sin(Tn*1.6+s.x)*.006;let r=ve.holder.position,c=(Math.hypot(r.x-s.holder.position.x,r.z-s.holder.position.z)<5?Math.atan2(r.x-s.holder.position.x,r.z-s.holder.position.z):s.baseFace)-s.holder.rotation.y;if(c=Math.atan2(Math.sin(c),Math.cos(c)),s.holder.rotation.y+=c*(1-Math.exp(-e*3)),s.mk.visible=Ov(s),s.mk.position.y=s.h+1+Math.sin(Tn*3)*.1,s.moveTo){let l=s.holder.position,h=s.moveTo.x-l.x,u=s.moveTo.z-l.z,d=Math.hypot(h,u);if(d>.05){let f=Math.min(d,e*1.2);l.x+=h/d*f,l.z+=u/d*f,l.y=It(l.x,l.z)+Math.abs(Math.sin(Tn*4))*.04,s.baseFace=Math.atan2(h,u)}else s.moveTo=null,s.baseFace=Math.PI}}for(let s of ts)s.spin&&(s.spin.rotation.y+=e*1.5),s.obj.parent===gt&&s.obj.visible&&(s.obj.position.y=It(s.x,s.z)+(s.spin?.75+Math.sin(Tn*2)*.12:0));let t=!E.talking&&E.phase==="play"?fu():null;ye("prompt").classList.toggle("hidden",!t),t&&(ye("prompt").textContent=t.label+(rc?" \u2014 tap "+t.verb:" (E)")),ye("bTalk").style.opacity=t?1:.45;let n=t?t.verb:"Talk";if(ye("bTalk").textContent!==n&&(ye("bTalk").textContent=n),E.gateOpen&&!E.ended){let s=ve.holder.position;s.z<K.gate.z-3.5&&Math.abs(s.x-K.gate.x)<3&&zv()}Rn.position.set(ve.holder.position.x+30,50,ve.holder.position.z+20),Rn.target.position.copy(ve.holder.position)}for(let t=xa.length-1;t>=0;t--){let n=xa[t];n.t+=e,n.update(e,n.t),n.t>=n.dur&&(n.end(),xa.splice(t,1))}ec>0&&(ec-=e,ec<=0&&ye("toast").classList.add("hidden")),window.__ML.trace&&ve&&Fv(e),Ie&&Ie.group.visible&&Ie.update(Tn),E.phase!=="cine"&&Pt.render(gt,Gt),requestAnimationFrame(Qf)}var Wy=new A;function Fv(i){let e=ve;e._feet||(e._feet=[],e.root.traverse(a=>{/mixamorig(Left|Right)ToeBase$/.test(a.name)&&e._feet.push(a)})),e.root.updateMatrixWorld(!0);let t=e._feet.map(a=>a.getWorldPosition(new A)),n=t.length?t[0].y<t[1].y?0:1:-1,s=e._lastFoot,r=null;s&&s.i===n&&n>=0&&(r=Math.hypot(t[n].x-s.p.x,t[n].z-s.p.z)/Math.max(i,1e-4)),n>=0&&(e._lastFoot={i:n,p:t[n].clone()}),window.__ML.trace.push({T:Tn,dt:i,x:e.holder.position.x,z:e.holder.position.z,st:e.loco.state,sp:e.loco.speed,ts:e.loco.timeScale,slide:r,fy:n>=0?t[n].y-e.holder.position.y:null}),window.__ML.trace.length>4e3&&window.__ML.trace.shift()}function Ov(i){return i.id==="murka"?E.murkaQuest===0||E.murkaQuest===1&&E.basket:i.id==="orren"?E.stonesQuest===0||E.stonesQuest===2:i.id==="titan"?E.titan<2&&E.murkaQuest>=2&&E.stonesQuest>=3:i.id==="rowan"?!E.metRowan:!1}function zv(){E.ended=!0,E.phase="end",wt(),ct.play(ve.cfg.voiceWin).then(()=>ct.play("n_end")),setTimeout(()=>ye("end").classList.remove("hidden"),1800)}var ws,Yn,Yt,jt=null,ii=[],jn=[],Ir,va=[],Lr={a:0};function ns(i){Lr.a=Math.max(Lr.a,i)}function Bf(i){Lr.a>.001&&(Gt.position.x+=(Math.random()-.5)*Lr.a,Gt.position.y+=(Math.random()-.5)*Lr.a*.6,Lr.a*=Math.exp(-i*5))}function Bv(i,e){let t=i.loco.state;if(t!=="walk"&&t!=="run"){i._ph=null;return}let n=i.loco.actions[t],s=n.time/n.getClip().duration%.5;i._ph!=null&&s<i._ph&&(mt.play("stomp",t==="run"?.55:.4,.9+Math.random()*.15),ns(t==="run"?.12:.07)),i._ph=s}function gu(i,e,t=.6){let n=ye("fade");n.style.background=i,n.classList.add("on"),E.fading=!0,setTimeout(()=>{e&&e(),setTimeout(()=>{n.classList.remove("on"),E.fading=!1},120)},t*1e3)}function cc(i,e,t){ve&&ve.holder.removeFromParent(),ve=gn[i],E.hero=i,window.__ML.player=ve,gt.add(ve.holder),e&&(ve.holder.position.set(e.x,It(e.x,e.z),e.z),ve.holder.rotation.y=t||0,st.yaw=(t||0)+Math.PI,Gt.position.set(e.x-Math.sin(t||0)*7,It(e.x,e.z)+4,e.z-Math.cos(t||0)*7)),ve.vel=new A,ve.loco.update(.01,0),ve.vis.position.y=cu(ve)}function $f(i){E.zone=i;let e=i==="cave";for(let t of gt.children)t===Ie.group||t===Rn||t===Rn.target||t===ru||ve&&t===ve.holder||(e?"_vis"in t.userData||(t.userData._vis=t.visible,t.visible=!1):"_vis"in t.userData&&(t.visible=t.userData._vis,delete t.userData._vis));Ie.group.visible=e,Rn.visible=!e,ru.intensity=e?.35:1.25,gt.fog=e?new pr(329743,14,80):new pr(13623523,60,230),gt.background=e?new we(131846):null,Pt.toneMappingExposure=e?1.3:1.05,e?(mt.stopLoop("hum"),mt.loop("cave_amb",.5)):mt.stopLoop("cave_amb"),E.log.push("zone:"+i)}function Es(i){return i.zone=i.zone||"world",Gf.push(i),i}function Hv(){let i=[];if(E.stage==="foot"||E.stage==="door")i.push({t:"Find what is humming beneath Mount Andor",done:E.doorFound}),E.doorFound||i.push({t:`Follow the blue crystals (${E.crystals||0}/${va.length})`,done:(E.crystals||0)>=va.length}),E.doorFound&&i.push({t:"Enter the hidden cave",done:!1});else if(E.stage==="cave"){if(i.push({t:"Explore the cave",done:!!E.seenChamber}),E.seenChamber){let e=jn.filter(t=>t.stone).length;i.push({t:`Wake the giant: place the 4 directive stones in order (${e}/4)`,done:E.solved}),E.knowMissing&&i.push({t:"Find the missing directive stone in the side tunnel",done:!!E.hasBuild}),e===4&&!E.solved&&i.push({t:"Activate the console on the platform",done:!1})}}else E.stage==="awake"?i.push({t:"Climb into TITAN",done:!1}):E.stage==="pilot"&&(i.push({t:"Smash the fallen boulder with TITAN",done:!!E.boulderGone}),i.push({t:"Leave the cave",done:!1}));return i}function ep(){return E.mode==="classic"?"Chapter 1 \xB7 The Shadow at the Gate":E.stage==="village"?"TITAN Awakens \xB7 Shadows at the Gate":"TITAN Awakens \xB7 Beni's Discovery"}var Vv=new A(K.andor.x,0,K.andor.z);function tp(){let i=As();if(E.mode==="story"){if(E.stage==="foot")return E.doorFound?{p:i,n:"Ancient door"}:{p:Vv,n:"Mount Andor"};if(E.stage==="door")return{p:i,n:"Cave"};if(E.stage==="cave")return E.seenChamber?E.knowMissing&&!E.hasBuild&&!ii.find(e=>e.d.key==="build").carried?{p:Ie.alcove,n:"Side tunnel"}:{p:Ie.consolePos,n:"Platform"}:{p:Ie.chamberDoor,n:"Deeper"};if(E.stage==="awake")return{p:Ie.titanPos,n:"TITAN"};if(E.stage==="pilot")return E.zone==="cave"?jt&&jt.alive?{p:jt.mesh.position,n:"Boulder"}:{p:Ie.exitPoint,n:"Exit"}:null}if(E.ended)return null;if(E.gateOpen)return{p:K.gate,n:"Castle gate"};if(E.murkaQuest===0)return{p:Ri("murka").holder.position,n:"Murka"};if(E.murkaQuest===1&&!E.basket)return{p:new A(-47,0,-6),n:"Basket"};if(E.murkaQuest===1)return{p:Ri("murka").holder.position,n:"Murka"};if(E.stonesQuest===0)return{p:Ri("orren").holder.position,n:"Orren"};if(E.stonesQuest===1){let e=ts.filter(t=>t.id.startsWith("stone")&&t.obj.visible);if(e.length){let t=ve.holder.position;return e.sort((n,s)=>Math.hypot(n.x-t.x,n.z-t.z)-Math.hypot(s.x-t.x,s.z-t.z)),{p:new A(e[0].x,0,e[0].z),n:"Star stone"}}}return E.stonesQuest===2?{p:Ri("orren").holder.position,n:"Orren"}:E.fight===0?{p:K.bridge,n:E.mode==="story"?"Bridge":"TITAN"}:null}function Hf(){let i=ve&&E.phase==="play"?tp():null;i&&E.zone==="cave"!=i.p.x>300&&(i=E.zone==="cave"?{p:Ie.exitPoint,n:"Way out"}:null);let e=ye("compass");if(!i){e.classList.add("hidden");return}e.classList.remove("hidden");let t=ve.holder.position,n=i.p.x-t.x,s=i.p.z-t.z,r=-Math.sin(st.yaw),a=-Math.cos(st.yaw),o=-a,c=r,l=Math.atan2(n*o+s*c,n*r+s*a);ye("cArrow").style.transform=`rotate(${l.toFixed(3)}rad)`,ye("cLbl").textContent=`${i.n} \xB7 ${Math.round(Math.hypot(n,s))} m`}function As(){return new A(K.cave.x+K.caveDir.x*8.2,0,K.cave.z+K.caveDir.z*8.2)}async function Gv(){let i=await Xt("cave_entrance",{height:7.5});ws=new ot;for(let f of i.parts){let g=new Ue(f.geometry,f.material);g.castShadow=g.receiveShadow=!0,ws.add(g)}let e=Math.atan2(K.caveDir.x,K.caveDir.z),t=As();ws.position.set(K.cave.x,Math.min(Wt.groundAt(t.x,t.z),Wt.groundAt(K.cave.x,K.cave.z))-.5,K.cave.z),ws.rotation.y=e,gt.add(ws),Wt.colliders.push({x:K.cave.x-K.caveDir.x*1.5,z:K.cave.z-K.caveDir.z*1.5,r:6.2});let n=new A(K.caveDir.z,0,-K.caveDir.x);for(let f of[-1,1])Wt.colliders.push({x:K.cave.x+n.x*5.6*f+K.caveDir.x*3,z:K.cave.z+n.z*5.6*f+K.caveDir.z*3,r:2.4});let s=document.createElement("canvas");s.width=s.height=256;let r=s.getContext("2d");r.fillStyle="#6a6660",r.fillRect(0,0,256,256);for(let f=0;f<500;f++){let g=70+Math.random()*50;r.fillStyle=`rgba(${g},${g-4},${g-10},0.55)`,r.fillRect(Math.random()*256,Math.random()*256,3+Math.random()*14,3+Math.random()*10)}let a=document.createElement("canvas");a.width=a.height=256;let o=a.getContext("2d");o.fillStyle="#000",o.fillRect(0,0,256,256);let c=(f,g,x)=>{f.strokeStyle=g,f.fillStyle=g,f.lineWidth=5,f.shadowColor=g,f.shadowBlur=x,f.beginPath(),f.arc(128,104,42,0,7),f.stroke(),f.beginPath();for(let m=0;m<4;m++){let p=m*Math.PI/2;f.moveTo(128+Math.cos(p)*52,104+Math.sin(p)*52),f.lineTo(128+Math.cos(p)*78,104+Math.sin(p)*78)}f.stroke(),f.font="bold 13px Trebuchet MS",f.textAlign="center",f.fillText("SERVE \xB7 BUILD \xB7 PROTECT \xB7 CONNECT",128,214),f.shadowBlur=0};c(r,"rgba(40,38,36,0.75)",0),c(o,"#7fd8ff",12);let l=new hn(s);l.colorSpace=it;let h=new hn(a);h.colorSpace=it;let u=new Ct({map:l,emissive:16777215,emissiveMap:h,emissiveIntensity:0,roughness:.95});Yn=new Ue(new yn(3,3.9,.6),u);let d=Wt.groundAt(t.x,t.z);Yn.position.set(t.x-K.caveDir.x*2.3,d+1.85,t.z-K.caveDir.z*2.3),Yn.rotation.y=e,gt.add(Yn),Yn.userData.y0=Yn.position.y;for(let[f,g]of[[30.5,6],[36.5,-5],[31.5,-15.8],[31,-27.5]]){let x=new ot;for(let p=0;p<4;p++){let _=new Ue(new _s(.22,0),new Ct({color:10479359,emissive:4175103,emissiveIntensity:1.5,flatShading:!0}));_.scale.y=2+Math.random()*1.5,_.position.set((Math.random()-.5)*.7,.3,(Math.random()-.5)*.7),_.rotation.z=(Math.random()-.5)*.6,x.add(_)}let m=si("rgba(120,200,255,0.9)",2.4);m.position.y=.6,x.add(m),x.position.set(f,Wt.groundAt(f,g),g),gt.add(x),va.push({g:x,x:f,z:g,seen:!1})}Es({pos:()=>As(),r:3.4,active:()=>E.mode==="story"&&E.stage==="foot"&&!E.doorBusy,label:()=>"Touch the glowing runes",verb:()=>"Touch",act:Wv}),Es({pos:()=>As(),r:3.4,active:()=>E.mode==="story"&&(E.stage==="door"||E.stage==="cave"||E.stage==="awake"),label:()=>"Enter the cave",verb:()=>"Enter",act:np})}function Wv(){E.doorBusy=!0,E.doorFound=!0,mt.play("chime",.6),Yn.material.emissiveIntensity=1.4,wt(),qt("Ancient door",["door_scan","b_door"],()=>{mt.play("grind",.8),E.doorAnim=.001,E.stage="door",wt(),Kt("The ancient door opens\u2026",2.5)})}function np(){E.fading||gu("#000",()=>{$f("cave"),cc(E.hero,Ie.entry,Math.PI),E.stage==="door"&&(E.stage="cave"),wt(),E.saidCave||(E.saidCave=1,setTimeout(()=>Cn("cv_enter"),700))})}function ip(){E.fading||gu("#000",()=>{$f("world");let i=As();cc(E.hero,new A(i.x+K.caveDir.x*3.5,0,i.z+K.caveDir.z*3.5),Math.atan2(K.caveDir.x,K.caveDir.z)),E.stage==="pilot"&&E.boulderGone&&(E.stage="village",setTimeout(()=>Cn("pi_obj"),800),Kt("Return to Meadowlight \u2014 help the villagers",4)),wt()})}function Xv(i){let e=new hn(Nf(i,256));e.colorSpace=it;let t=new Ct({map:e,emissive:new we(i.col),emissiveMap:e,emissiveIntensity:.55,roughness:.7}),n=new Ct({color:3817030,emissive:new we(i.col),emissiveIntensity:.25}),s=new Ue(new yn(.9,.9,.18),[n,n,n,n,t,t]),r=si("rgba(140,210,255,0.7)",1.8);return s.add(r),s}async function qv(){Ie=Uf(gt,Cs);let i=await Xt("copper_sentinel",{height:22});Yt=new ot;for(let r of i.parts){let a=new Ue(r.geometry,r.material);a.castShadow=!1,a.receiveShadow=!0,Yt.add(a)}Yt.position.copy(Ie.titanPos),Ie.group.add(Yt),Yt.userData.size=i.size;let e=[];for(let r of[-.42,.42]){let a=si("rgba(110,200,255,1)",2.4);a.position.set(r,22*.915,1.9),a.material.opacity=.12,Yt.add(a),e.push(a)}let t=si("rgba(120,210,255,1)",6);t.position.set(0,22*.72,2.6),t.material.opacity=.25,Yt.add(t);let n=new qi(7325951,0,40,1.5);n.position.set(0,22*.72,5),Yt.add(n),Yt.userData={...Yt.userData,eyes:e,core:t,coreL:n};for(let r of[-3.6,3.6])Ie.colliders.push({x:Ie.titanPos.x+r,z:Ie.titanPos.z,r:2.8});let s=new Ct({color:6975354,roughness:.9});Ie.sockets.forEach((r,a)=>{let o=new ot,c=new Ue(new _r(.55,.7,1.1,10),s);c.position.y=.55,o.add(c);let l=Qo([["I","II","III","IV"][a]],.8,.5,{font:"bold 64px Georgia",fg:"#ffe7a8",bg:"rgba(30,26,20,0.9)"});l.position.set(0,.6,.72),o.add(l);let h=si("rgba(120,200,255,0.8)",1.2);h.position.y=1.2,o.add(h),o.position.copy(r),Ie.group.add(o),Ie.colliders.push({x:r.x,z:r.z,r:.6}),jn.push({i:a,g:o,pos:r,stone:null,ring:h})});{let r=new ot,a=new Ue(new yn(1.6,1.2,.8),s);a.position.y=.6,r.add(a),Ir=Qo(["DIRECTIVE CORE","OFFLINE"],2.2,1.3,{font:"bold 44px Trebuchet MS"}),Ir.position.set(0,1.9,0),Ir.rotation.x=-.25,r.add(Ir),r.position.copy(Ie.consolePos),Ie.group.add(r),Ie.colliders.push({x:Ie.consolePos.x,z:Ie.consolePos.z,r:.8})}for(let r of kf){let a=Ie.stoneSpots[r.key],o=new Ue(new _r(.5,.65,.6,8),s);o.position.set(a.x,a.y+.3,a.z),Ie.group.add(o);let c=Xv(r);c.position.set(a.x,a.y+1.25,a.z),Ie.group.add(c),ii.push({d:r,m:c,home:a,socket:null,carried:!1})}for(let r of ii)Es({zone:"cave",pos:()=>r.m.getWorldPosition(new A),r:1.4,active:()=>!E.solved&&!r.carried&&r.socket==null&&!ii.some(a=>a.carried),label:()=>`Pick up the ${r.d.word} stone`,verb:()=>"Pick up",act:()=>Yv(r)});for(let r of jn)Es({zone:"cave",pos:()=>r.pos,r:1.15,active:()=>!E.solved&&(r.stone||ii.some(a=>a.carried)),label:()=>{let a=ii.find(c=>c.carried),o=["I","II","III","IV"][r.i];return a&&r.stone?`Swap stones in socket ${o}`:a?`Place the ${a.d.word} stone in socket ${o}`:`Take the ${r.stone.d.word} stone from socket ${o}`},verb:()=>{let a=ii.find(o=>o.carried);return a&&r.stone?"Swap":a?"Place":"Take"},act:()=>jv(r)});Es({zone:"cave",pos:()=>Ie.consolePos,r:1.6,active:()=>!E.solved,label:()=>jn.every(r=>r.stone)?"Activate the directive console":"Read the directive console",verb:()=>jn.every(r=>r.stone)?"Activate":"Read",act:Kv}),Es({zone:"cave",pos:()=>new A(Ie.titanPos.x,0,Ie.titanPos.z+6.6),r:2.6,active:()=>E.stage==="awake",label:()=>"Climb into TITAN",verb:()=>"Enter",act:Jv}),Es({zone:"cave",pos:()=>Ie.exitPoint,r:2.6,active:()=>!(jt&&jt.alive),label:()=>"Leave the cave",verb:()=>"Exit",act:ip})}function ou(i){i.m.removeFromParent(),ve.holder.add(i.m),i.m.position.set(0,ve.cfg.h+.75,0),i.m.rotation.set(0,0,0),i.carried=!0}function Yv(i){ou(i),mt.play("pickup",.6),i.d.key==="build"&&!E.hasBuild&&(E.hasBuild=1,Cn("cv_glyph")),Kt(`You are carrying the ${i.d.word} stone`,2),wt()}function jv(i){let e=ii.find(n=>n.carried),t=["I","II","III","IV"][i.i];if(i.stone&&!e){let n=i.stone;i.stone=null,n.socket=null,ou(n),mt.play("dial",.7)}else if(e){let n=i.stone;e.carried=!1,e.m.removeFromParent(),Ie.group.add(e.m),e.m.position.set(i.pos.x,i.pos.y+1.65,i.pos.z),e.m.rotation.set(0,0,0),i.stone=e,e.socket=i.i,mt.play("dial",.8),E.log.push(`socket:${t}=${e.d.key}`),n&&(n.socket=null,ou(n))}sp(),wt()}function sp(){let i=jn.filter(e=>e.stone).length;Ir.userData.set(E.solved?["DIRECTIVES","ACCEPTED"]:i<4?["DIRECTIVE CORE OFFLINE",`STONES SET: ${i} / 4`]:["ALL SOCKETS SET","ACTIVATE TO VERIFY"])}function Kv(){if(!E.readConsole){E.readConsole=1,E.seenChamber=1;let t=["cv_console","cv_think"];E.hasBuild||(t.push("cv_missing"),E.knowMissing=1),qt("Directive console",t),wt();return}if(!jn.every(t=>t.stone)){!E.hasBuild&&!E.knowMissing?(E.knowMissing=1,qt("Beni",["cv_missing"])):Kt(`Set all four stones first (${jn.filter(t=>t.stone).length}/4)`,2.5),wt();return}let i=["serve","build","protect","connect"],e=jn.filter(t=>t.stone.d.key===i[t.i]).length;if(E.tries=(E.tries||0)+1,E.log.push("console:"+e),e===4){Zv();return}mt.play("wrong",.7),Cn("cv_wrong"),Ir.userData.set(["SEQUENCE REJECTED",`${e} OF 4 IN PLACE`]),ns(.08),E.tries===2&&setTimeout(()=>Kt("Hint: what did Chrisler type, the night TITAN woke up? Put them in that order.",6),1800),E.tries>=3&&setTimeout(()=>Kt('Remember: "Serve life. Build. Protect. Connect."',6),1800)}function Zv(){E.solved=!0,sp(),mt.play("right",.8),Cn("cv_ok"),E.phase="cut",E.cut={t:0},wt();for(let t of jn)t.ring.material.color=new we(10485711);let i=Ie.titanPos,e=new A(i.x,i.y+13,i.z);E.camOverride=t=>{let n=E.cut;n.t+=t;let s=Math.min(1,n.t/10),r=-.5+s*.9;return{pos:new A(i.x+Math.sin(r)*24,i.y+3+s*6,i.z+Math.cos(r)*24),look:e.clone().setY(i.y+11+s*4),k:2}},setTimeout(()=>{mt.play("rumble",1),ns(.35)},600),setTimeout(()=>{mt.play("flash",.7),E.cut.glow=1,Jf("rgba(120,200,255,.55)"),ns(.5)},3500),setTimeout(()=>{mt.play("chime",.7),qt("TITAN",["aw_titan","aw_beni"],()=>{E.camOverride=null,E.cut=null,E.phase="play",E.stage="awake",wt(),Kt("Climb into TITAN",3)})},5200)}function Jv(){E.fading||(E.log.push("pilot"),mt.play("flash",.8),gu("#dff3ff",()=>{Yt.visible=!1;let i=new A(Ie.titanPos.x,0,Ie.titanPos.z+8.2);cc("beni_titan",i,0),E.stage="pilot",wt(),qt("TITAN",["aw_enter","pi_beni","pi_titan"],()=>{Qv()})},.9))}function Qv(){let i=new vr(2.6,1),e=new Ue(i,new Ct({color:10787984,emissive:3422270,roughness:1,flatShading:!0}));e.position.copy(Ie.boulderPos).setY(1.6),Ie.group.add(e);let t={x:Ie.boulderPos.x,z:Ie.boulderPos.z,r:2.7};Ie.colliders.push(t),jt={mesh:e,col:t,alive:!0},mt.play("rumble",.9),ns(.4),Kt("The awakening shook the mountain \u2014 a boulder blocks the tunnel! Use TITAN's strength (\u2726).",5),wt()}function $v(){jt.alive=!1,E.boulderGone=!0,Ie.colliders.splice(Ie.colliders.indexOf(jt.col),1),hu(jt.mesh.position.clone(),4,14207144),uu(jt.mesh.position.clone(),50,"rgba(220,210,190,1)"),jt.mesh.removeFromParent(),mt.play("stomp",1,.6),ns(.6),E.log.push("boulder"),Kt("CRASH! The way out is clear.",2.5),wt()}function ey(i,e){if(E.mode!=="story"){Hf();return}let t=ve.holder.position;if(E.zone==="world"){if(E.stage==="foot"){let n=As(),s=Math.hypot(t.x-n.x,t.z-n.z),r=Math.max(0,1-s/70);mt.loops.hum?mt.loops.hum.g.gain.value=.08+r*r*.8:mt.loop("hum",.1),Yn.material.emissiveIntensity=E.doorFound?1.4:Math.max(0,1-s/12)*1.1,s<18&&!E.saidNear&&(E.saidNear=1,Cn("b_near"));for(let a of va)!a.seen&&Math.hypot(t.x-a.x,t.z-a.z)<4.5&&(a.seen=!0,E.crystals=(E.crystals||0)+1,uu(a.g.position.clone(),20,"rgba(140,210,255,1)"),mt.play("pickup",.4,1.3),E.crystals===1&&Cn("b_crystal"),wt())}E.doorAnim&&(E.doorAnim+=i,Yn.position.y=Yn.userData.y0-Math.min(1,E.doorAnim/2.5)*4.6,ns(E.doorAnim<2.5?.04:0),E.doorAnim>2.6&&(E.doorAnim=0,Yn.visible=!1));for(let n of va)n.g.children[0]&&(n.g.rotation.y+=i*.5);E.stage==="village"&&E.murkaQuest>=2&&E.stonesQuest>=3&&E.fight===0&&Math.hypot(t.x-K.bridge.x,t.z-K.bridge.z)<7&&(Cn("b_bridge"),oc(0))}else{!E.seenChamber&&Ie.inChamber(t.x,t.z)&&(E.seenChamber=1,wt(),Kt("A giant sleeps here\u2026 Read the console on the platform.",4));for(let n of ii)!n.carried&&n.socket==null?(n.m.rotation.y+=i*.8,n.m.position.y=n.home.y+1.25+Math.sin(e*2+n.home.x)*.08):n.carried&&(n.m.rotation.y+=i*1.2);if(Yt&&Yt.visible){let n=E.solved?Math.min(1,(E.cut?E.cut.t:99)/4):.12+Math.sin(e*.8)*.05;for(let s of Yt.userData.eyes)s.material.opacity=.15+n*.85,s.scale.setScalar(2.4+n*1.6);Yt.userData.core.material.opacity=.25+n*.75,Yt.userData.core.scale.setScalar(6+n*5+(E.cut&&E.cut.glow?Math.sin(e*6)*1.5:0)),Yt.userData.coreL.intensity=n*60}}Hf()}function ty(){return K.storyStart.clone()}function iu(){ct.unlock(),mt.unlock(),E.mode="story",E.stage="foot",E.phase="play",ye("select").classList.add("hidden"),ye("title").classList.add("hidden"),ye("hud").classList.remove("hidden");for(let t in gn)gn[t].holder.removeFromParent();let i=Ri("titan");i&&(i.holder.removeFromParent(),Rs.splice(Rs.indexOf(i),1));let e=ty();cc("beni_foot",e,Math.atan2(K.andor.x-e.x,K.andor.z-e.z)),st.pitch=.06,st.manualT=6,ye("quest").querySelector(".qt").textContent=ep(),ic(),wt(),E.log.push("story:start"),ct.play("b_start").then(()=>ct.play("b_obj")),Kt("Something is humming beneath Mount Andor\u2026",4),mt.loop("hum",.1)}function su(i){ct.unlock(),mt.unlock(),ct.stop(),ye("title").classList.add("hidden");let e=E.phase;E.phase="cine",E.log.push("cine:start"),$o.start(t=>{E.log.push("cine:"+t),E.phase=e==="title"?"title":e,i&&i(t)},{speed:+(es.get("cinespeed")||1),muted:es.has("mute")})}async function ny(){ga(.05,"Building the village\u2026"),Wt=await Tf(gt,Cs),ga(.55,"Waking the villagers\u2026"),await yv(),await Mv(),await wv(),Cv(),ga(.68,"Opening the mountain\u2026"),await Gv(),await qv(),ga(.8,"Calling the heroes\u2026");for(let e of["chrisler","beni_titan","ezra","beni_foot"])gn[e]=await bv(e);await ct.init(),await $o.load(),ga(1,"Ready");let i={ezra:-2.2,chrisler:0,beni_titan:2.6};for(let e in gn){if(!(e in i))continue;let t=gn[e];t.holder.position.set(i[e],It(i[e],6),6),t.holder.rotation.y=.15,gt.add(t.holder),t.loco.update(.01,0),t.vis.position.y=cu(t)}ye("loading").classList.add("hidden"),es.get("mode")==="classic"?(E.mode="classic",ye("select").classList.remove("hidden"),E.phase="select"):(ye("title").classList.remove("hidden"),E.phase="title"),ye("bBegin").onclick=()=>su(()=>iu()),ye("bSkipIntro").onclick=()=>iu(),ye("bClassic").onclick=()=>{E.mode="classic",ye("title").classList.add("hidden"),ye("select").classList.remove("hidden"),E.phase="select"},ye("mReplay").onclick=()=>{ye("menu").classList.add("hidden");let e=E.paused;E.paused=!0,su(()=>{E.paused=!1})},document.querySelectorAll(".card").forEach(e=>{e.classList.toggle("sel",e.dataset.hero===E.hero),e.onclick=()=>{E.hero=e.dataset.hero,document.querySelectorAll(".card").forEach(t=>t.classList.toggle("sel",t===e)),gn[E.hero].loco.attack(),ct.unlock()}}),ye("bStart").onclick=Vf,window.__ML.ready=!0,window.__ML.world=Wt,window.__ML.heroes=gn,window.__ML.renderer=Pt,window.__ML.camera=Gt,window.__ML.scene=gt,window.__ML.cam=st,window.__ML.voice=ct,window.__ML.cave=Ie,window.__ML.cine=$o,window.__ML.sfx=mt,window.__ML.api={startGame:Vf,startStory:iu,playOpening:su,skipCine:()=>$o.skip(),enterCave:np,exitCave:ip,nearest:()=>{let e=fu();return e&&{label:e.label,verb:e.verb}},stones:()=>ii.map(e=>({key:e.d.key,carried:e.carried,socket:e.socket,pos:e.m.getWorldPosition(new A).toArray()})),sockets:()=>jn.map(e=>({i:e.i,pos:e.pos.toArray(),stone:e.stone&&e.stone.d.key})),caveInfo:()=>({consolePos:Ie.consolePos.toArray(),entry:Ie.entry.toArray(),exit:Ie.exitPoint.toArray(),titan:Ie.titanPos.toArray(),boulder:jt&&jt.alive?jt.mesh.position.toArray():null,mouth:As().toArray(),stats:Ie.stats}),objective:()=>{let e=tp();return e&&{n:e.n,p:[e.p.x,e.p.z]}},interact:pu,attack:mu,talkTo:e=>qf(Ri(e)),nextLine:ya,npc:Ri,items:ts,enemies:()=>_a,spawnEnemy:Xf,killAll:()=>_a.forEach(e=>e.state!=="dead"&&Zf(e)),teleport:(e,t,n=0)=>{ve.holder.position.set(e,It(e,t),t),ve.holder.rotation.y=n,st.yaw=n+Math.PI,Gt.position.set(e-Math.sin(n)*7,It(e,t)+4,t-Math.cos(n)*7)},frameStats:iy,atkReady:()=>sc<=0,startFight:oc,setCam:(e,t,n)=>{st.yaw=e,st.pitch=t,st.dist=n,st.manualT=999},updateQuests:wt},requestAnimationFrame(Qf)}function iy(){let i=nc.slice(-300).map(t=>t*1e3).sort((t,n)=>t-n);return{avgMs:+(i.reduce((t,n)=>t+n,0)/i.length).toFixed(2),p95Ms:+i[Math.floor(i.length*.95)].toFixed(2),calls:Pt.info.render.calls,triangles:Pt.info.render.triangles,geometries:Pt.info.memory.geometries,textures:Pt.info.memory.textures}}function Vf(){ct.unlock(),mt.unlock(),E.mode="classic",E.stage="village",E.phase="play",ye("quest").querySelector(".qt").textContent=ep(),ye("select").classList.add("hidden"),ye("hud").classList.remove("hidden");for(let t in gn)t!==E.hero&&gn[t].holder.removeFromParent();ve=gn[E.hero],window.__ML.player=ve,gt.add(ve.holder);let i=K.entrance.x,e=K.entrance.z-2;ve.holder.position.set(i,It(i,e),e),ve.holder.rotation.y=Math.PI,st.yaw=0,st.pitch=.32,Gt.position.set(i,It(i,e)+4,e+7),ic(),wt(),ct.play(ve.cfg.voiceGo).then(()=>ct.play("n_intro1")).then(()=>ct.play("n_intro2")),Kt("Find Murka at the well in the village square",4)}ny().catch(i=>{console.error(i),ye("lmsg").textContent="Error: "+i.message,window.__ML.error=String(i.stack||i)});
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
