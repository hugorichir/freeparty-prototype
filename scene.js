// Décor 3D léger. Le gameplay reste fonctionnel même si le moteur ne se charge pas.
try{
const pc=await import('https://cdn.jsdelivr.net/npm/playcanvas@2.23.0/build/playcanvas.mjs');
const canvas=document.getElementById('scene');
const device=await pc.createGraphicsDevice(canvas,{deviceTypes:[pc.DEVICETYPE_WEBGL2]});
const opts=new pc.AppOptions();opts.graphicsDevice=device;
opts.componentSystems=[pc.RenderComponentSystem,pc.CameraComponentSystem,pc.LightComponentSystem];
const app=new pc.AppBase(canvas);app.init(opts);
app.setCanvasResolution(pc.RESOLUTION_AUTO);app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
const cam=new pc.Entity('Camera');cam.addComponent('camera',{clearColor:new pc.Color(.06,.06,.12)});cam.setPosition(5,8,12);cam.lookAt(0,0,0);app.root.addChild(cam);
const light=new pc.Entity('Light');light.addComponent('light',{type:'directional',intensity:1.8});light.setEulerAngles(35,25,0);app.root.addChild(light);
function cube(x,y,z,sx,sy,sz,color){const o=new pc.Entity();o.addComponent('render',{type:'box'});o.setLocalScale(sx,sy,sz);o.setPosition(x,y,z);const mat=new pc.StandardMaterial();mat.diffuse=new pc.Color(...color);mat.update();o.render.material=mat;app.root.addChild(o);return o}
cube(0,-.32,0,14,.3,10,[.10,.14,.17]);
const towers=[];
for(let i=0;i<10;i++){const x=(i%5-2)*1.05,z=Math.floor(i/5)*1.15-1;const o=cube(x,.2,z,.86,1.1,.58,[.17,.19,.24]);cube(x,.23,z+.30,.68,.78,.04,[.22,.28,.33]);towers.push(o)}
app.on('update',()=>{const t=Date.now()*.001;for(let i=0;i<towers.length;i++){const a=.015*Math.sin(t*3+i*.8);towers[i].setLocalScale(.86,1.1+a,.58)}});
app.start();
window.addEventListener('resize',()=>app.resizeCanvas());
}catch(err){console.warn('Décor PlayCanvas indisponible (jeu toujours opérationnel)',err)}
