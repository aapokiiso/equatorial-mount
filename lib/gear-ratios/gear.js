var ll,Ol
o=Math
ll=o.PI
Ol=o.PI*2

a=(function(){
var O1,l,oO
var p
var ol,l1,k,F,D
var q0,H,J,C
var L0
var G




a.prototype.B=function(N){
var n,s0,OO
if(N>this.oO){
n=o.sqrt(N*N-this.oO*this.oO)
s0=o.atan(n/this.oO)
OO=n/this.oO-s0
return OO
}else{
return 0
}
}




a.prototype.J0=function(){
var d,h0
this.k=this.H*this.O1/2.0/ll
this.F=this.k-this.O1/4.0
this.D=this.k+this.O1/4.0
this.oO=this.k*o.cos(this.l*ll/180.0)
this.p=this.D

if(this.C){
if(F<this.oO)F=this.oO
this.D+=this.O1*0.02
this.p=this.D+this.O1*0.7
}

this.J=Ol/this.H
d=this.B(this.k)


var K=new Object()

this.q0=[]
K.OO=-this.J/2
K.N=this.F
this.q0[0]=K


for(h0=0;h0<=20;h0++){
K=new Object()
K.N=(this.D-this.F)*h0/20.0+this.F
K.OO=this.B(K.N)-d-this.J/4
if(K.OO<0)this.q0.push(K)
}

for(h0=0;h0<=20;h0++){
K=new Object()
K.N=(this.D-this.F)*(20-h0)/20.0+this.F
K.OO=-this.B(K.N)+d+this.J/4
if(K.OO>0)this.q0.push(K)
}

K=new Object()
K.OO=this.J/2
K.N=this.F
this.q0.push(K)
}





a.prototype.D0=function(I){
var u,v,OO,h0
for(h0=0;h0<this.q0.length;h0++){
OO=this.q0[h0].OO+I
u=this.ol+o.cos(OO)*this.q0[h0].N
v=this.l1-o.sin(OO)*this.q0[h0].N
if(h0){
iF(u,v)
}else{
If(u,v)
}
}
}

a.prototype.G0=function(l0){
var o1
for(o1=0;o1<this.H;o1++){
if(this.C){
this.D0(l0+this.J*(o1+.5)+ll)
}else{
this.D0(l0+this.J*o1)
}
}
}




a.prototype.F0=function(l0){
var A
var e0
var g0
var d0,b0
var c0,a0
var m

if(this.C)return


g0=this.O1*.4
if(g0<this.D*0.05)g0=this.D*0.05
e0=this.F-g0*1.5
A=this.L0+g0*2
if(A<this.F*0.2)A=this.F*0.2

m=g0*0.5
if(m>e0-A*0.2)m=e0-A*0.2

if(this.G>1){

var E=(g0+m)/o.sin(ll/this.G)
if(A<E)A=E
}

if(A+m*2>e0)return

b0=o.sqrt(A*A-g0*g0)
d0=o.sqrt(e0*e0-g0*g0)
b0+=m
d0-=m

a0=o.asin((g0+m)/A)
c0=o.asin((g0+m)/e0)

if(this.G==0){

e1se.arc(this.ol,this.l1,e0,0,Ol)
cts.arc(this.ol,this.l1,e0,0,Ol)
If(this.ol+A,this.l1)
e1se.arc(this.ol,this.l1,A,0,Ol)
cts.arc(this.ol,this.l1,A,0,Ol)
}


for(var O=0;O<this.G;O++){
var b=Ol/this.G*O-l0
var c=Ol/this.G*(O+1)-l0
var W=o.sin(b)
var h=o.cos(b)
var Y=o.sin(c)
var i=o.cos(c)


If(this.ol+h*b0-W*g0,this.l1+W*b0+h*g0)
iF(this.ol+h*d0-W*g0,this.l1+W*d0+h*g0)


e1se.arc(this.ol,this.l1,e0,b+c0,c-c0)
cts.arc(this.ol,this.l1,e0,b+c0,c-c0)


iF(this.ol+i*d0+Y*g0,this.l1+Y*d0-i*g0)
iF(this.ol+i*b0+Y*g0,this.l1+Y*b0-i*g0)


e1se.arc(this.ol,this.l1,A,c-a0,b+a0,1)
cts.arc(this.ol,this.l1,A,c-a0,b+a0,1)


iF(ol+h*b0-W*g0,l1+W*b0+h*g0)
}
}




a.prototype.E0=
function(w0,z0,l0,Q0,M0,X){
l0-=o.floor(l0)

IF()
if(X){
Oo("#800000")
}else{
Oo("#80c0ff")
e1se.lineWidth=0.7
cts.lineWidth=0.7
}

var range=o.round(1000/this.O1)+1


if(Q0||X){
var o1,L
for(o1=-range;o1<range;o1++){
L=this.l1+(o1-l0)*this.O1
If(this.ol-20,L)
iF(this.ol+20,L)
}
}

if(Q0){

If(this.ol,this.l1-100)
iF(this.ol,this.l1+100)
}
O0()


if(!X){
IF()
Oo()

var S=this.O1*0.25
var f=this.O1/4-S*o.tan(this.l*ll/180.0)
for(o1=-range;o1<=range;o1++){
L=this.l1+(o1-l0)*this.O1

If(this.ol+S,L+f)
iF(this.ol+S,L-f)
iF(this.ol-S,L-this.O1/2+f)
iF(this.ol-S,L-this.O1/2-f)
iF(this.ol+S,L-this.O1+f)

}
O0()
}

}




a.prototype.C0=
function(w0,z0,l0,Q0,M0,A0,X){
var V,g,OO
var o1
var y
ol=w0
this.ol=ol
l1=z0
this.l1=l1

if(this.H==0){
this.E0(w0,z0,l0,Q0,X)
return
}

l0=l0*Ol/this.H
if(this.C)l0=-l0


if(A0){
Oo("#4060ff")
y=this.D*1.1
IF()
If(ol-y,l1)
iF(ol+y,l1)
If(ol,l1-y)
iF(ol,l1+y)
O0()
}

if(X){
Oo()
}else{
Oo("#80c0ff")
}


if(Q0||X){
IF()
var P=this.F
var Q=this.D
if(X){
P=this.F*.9
Q=this.D*1.1
}
for(o1=0;o1<this.H;o1++){
OO=l0+o1*this.J
V=-o.sin(OO)
g=o.cos(OO)
If(ol+g*P,l1+V*P)
iF(ol+g*Q,l1+V*Q)
}
O0()
}

if(Q0){

IF()
e1se.arc(ol,l1,this.k,0,Ol)
cts.arc(ol,l1,this.k,0,Ol)
O0()
}

if(M0){

IF()
e1se.arc(ol,l1,this.oO,0,Ol)
cts.arc(ol,l1,this.oO,0,Ol)
Oo("#80c0ff")
O0()
}


IF()
e1se.arc(ol,l1,this.L0,0,Ol)
cts.arc(ol,l1,this.L0,0,Ol)
Oo()
O0()

if(!X){
Oo()
IF()
this.G0(l0)
O0()
}

if(this.C){

}else if(this.G>=0){
Oo()
IF()
this.F0(l0)
O0()
}
}

function a(p0,OO,i0,z,f0){
this.l=OO
this.O1=p0
this.H=i0>0?i0:-i0
this.C=i0<0?1:0
this.L0=z/2
this.G=f0
this.J0()
}

return a
})()


var o0
var I0=0
var j0,k0,R
var m0=0


function P0(l1)
{
function t0(ol)
{
IF()
Oo("#0000ff")
If(ol,l1-4*o0)
iF(ol,l1+4*o0)
v0=2.5*o0
v0=ol>1?-v0:v0
y0=1.5*o0

If(ol+v0,l1-y0)
iF(ol,l1)
iF(ol+v0,l1+y0)
If(ol,l1)
iF(ol+v0*3,l1)
O0()
}

e1se.font="14px Arial"
e1se.fillStyle='blue'
O=(150*S0/o0).toFixed(1)
e1se.fillText("If this is not "+O+" mm, enter measured distance under \"Measured cal distance\"",o0*9,l1+3)

t0(0.5)
t0(S0*150+0.5)
}


function N0(u0,x0)
{
var q=e1se.canvas.height
var t=e1se.canvas.width

IF()
Oo("#80f080")
O=u0-o.floor(u0/10/o0)*10*o0
for(;O<=t;O+=o0*10){
If(O,0)
iF(O,q)
}

O=x0-o.floor(x0/10/o0)*10*o0
for(;O<=q+10;O+=o0*10){
If(0,O)
iF(t,O)
}
O0()
}

function H0(){
if(lO.animate.checked){
I0+=0.1
setTimeout(function(){H0()},100)
}
}


function UpdateGears(e){
var lO=document.gp
if(e){
m0=0
}else{
O=window.location.href

if(lO.contangle.value>45)lO.contangle.value=45
if(lO.g2t.value>500)lO.g2t.value=500
if(lO.g1t.value>500)lO.g1t.value=500
if(lO.shafthole.value<0)lO.shafthole.value=0
if(lO.toothspace.value>100)lO.toothspace.value=100
if(lO.toothspace.value<2)lO.toothspace.value=2
if(lO.pagewidth.value<50)lO.pagewidth.value=50
if(lO.pagewidth.value>360)lO.pagewidth.value=300

lO.g2t.disabled=!lO.twogears.checked
lO.g1t.disabled=lO.rack.checked
lO.spokes.disabled=!lO.showspokes.checked
lO.rotation.disabled=lO.animate.checked

var f0=lO.showspokes.checked?lO.spokes.value:-1
n0=lO.toothspace.value*o0
j0=parseInt(lO.g1t.value)
k0=parseInt(lO.g2t.value)
if(lO.rack.checked)j0=0
if(!m0)R=lO.rotation.value/100
j=lO.contangle.value
L0=lO.shafthole.value*o0

_=new a(n0,j,j0,L0,f0)
__=new a(n0,j,k0,L0,f0)

}

e1se.clearRect(0,0,e1se.canvas.width,e1se.canvas.height)
cts.clearRect(0,0,cts.width,cts.height)
r=j0*n0/Ol
s=k0*n0/Ol

x0=e1se.canvas.height/2
u0=e1se.canvas.width/2

if(lO.twogears.checked){
if(lO.grid.checked)N0(u0-r,x0)
P0(e1se.canvas.height-3*o0)

if(lO.cline.checked){

Z=o.tan(j/180*ll)
w=_.oO*o.sin(j*ll/180)
x=__.oO*o.sin(j*ll/180)
IF()
If(u0-w*Z,x0-w)
iF(u0+x*Z,x0+x)
Oo("#80c0ff")
O0()
}
_.C0(u0-r,x0,(0.5+R),lO.pdia.checked,lO.cline.checked,lO.crosshair.checked,lO.divplate.checked)
M=-R+k0/2
if(k0==0)M=0.5+R
__.C0(u0+s,x0,M,lO.pdia.checked,lO.cline.checked,lO.crosshair.checked,lO.divplate.checked)
}else{
T=U=r+1.6*n0/Ol
if(T<u0)T=u0
if(U<x0)U=x0
if(lO.grid.checked)N0(T,U)
P0(e1se.canvas.height-3*o0)
_.C0(T,U,(0.5+R)*Ol/j0,lO.pdia.checked,lO.cline.checked,lO.crosshair.checked,lO.divplate.checked)
}
if(lO.animate.checked){
R+=0.02
if(!m0){
m0=1
setTimeout(function(){UpdateGears(1)},30)
}
}
}
function K0()
{
O=document.gp.pagewidth.value
if(O<50)O=50
if(O>300)O=300
document.gp.pagewidth.value=O
T0=150/O*S0
o0=T0

document.getElementById("dpi").textContent=(o0*25.4).toFixed(1)
}
function UpdateScale()
{
K0()
UpdateGears()
}

function B0(w,h)
{
e1se.canvas.width=w||1000
e1se.canvas.height=h||1000
cts.__root.setAttribute("width", e1se.canvas.width)
cts.__root.setAttribute("height", e1se.canvas.height)
UpdateGears()
}

function PrintGears()
{
document.getElementById("moretext").style.display="none"
window.print()
document.getElementById("moretext").style.display="block"
}

function iF(O,b){e1se.lineTo(O,b);cts.lineTo(O,b)}
function If(O,b){e1se.moveTo(O,b);cts.moveTo(O,b)}
function O0(){e1se.stroke();cts.stroke()}
function IF(){e1se.beginPath();cts.beginPath()}
function Oo(O){
if(typeof O=='undefined')O="#000000"
e1se.strokeStyle=O
cts.strokeStyle=O
e1se.lineWidth=1
cts.lineWidth=1
}




r0=window.navigator.userAgent
R0=144
if(r0.indexOf("Firefox")>=0)R0=96
if(r0.indexOf("Chrome")>=0)R0=144
if(r0.indexOf("Trident")>=0)R0=160
o0=R0/25.4
S0=o0


var lo=document.getElementById("myCanvas")
var e1se=lo.getContext("2d")
var cts = new C2S(e1se.canvas.width,e1se.canvas.width);

K0()
B0()
window.addEventListener("resize",B0)



