"use strict";(()=>{var e={};e.id=445,e.ids=[445],e.modules={5142:e=>{e.exports=require("dotenv")},145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},5900:e=>{e.exports=require("pg")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,n){return n in t?t[n]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,n)):"function"==typeof t&&"default"===n?t:void 0}}})},9721:(e,t,n)=>{n.r(t),n.d(t,{config:()=>v,default:()=>u,routeModule:()=>E});var i={};n.r(i),n.d(i,{default:()=>d});var r=n(1802),o=n(7153),a=n(6249),s=n(8067),c=n.n(s);async function d(e,t){let n=`
        SELECT 
        interventi_assegnati.id,
        interventi_assegnati.data_intervento,
        interventi_assegnati.ora_intervento,
        tecnici.nome,
        tecnici.cognome,
        interventi.dettagli,
        interventi.indirizzo,
        interventi.tipologia

        FROM
        interventi_assegnati

        LEFT JOIN
        tecnici ON interventi_assegnati.operatore_id = tecnici.id
        LEFT JOIN
        interventi ON interventi_assegnati.intervento_id = interventi.id
    `,i=`
        CREATE TABLE IF NOT EXISTS interventi_assegnati (
        id SERIAL PRIMARY KEY,
        intervento_id INTEGER NOT NULL REFERENCES interventi(id),
        tecnico INTEGER NOT NULL REFERENCES tecnici(id),
        data_intervento DATE NOT NULL,
        ora_intervento TIME NOT NULL
);
    `;try{let e=await c().connect();await e.query(i);let r=await e.query(n);t.status(200).json(r.rows)}catch(e){console.error("Errore nella comunicazione con il db:",e),t.status(500).json({error:"Errore interno del server"})}}let u=(0,a.l)(i,"default"),v=(0,a.l)(i,"config"),E=new r.PagesAPIRouteModule({definition:{kind:o.x.PAGES_API,page:"/api/interventi/getInterventiAssegnati",pathname:"/api/interventi/getInterventiAssegnati",bundlePath:"",filename:""},userland:i})},8067:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});let i=n(5900);n(5142).config();let r=new i.Pool({user:process.env.RDS_USER,host:process.env.RDS_HOSTNAME,database:process.env.RDS_DB_NAME,password:process.env.RDS_PASSWORD,port:process.env.RDS_PORT});e.exports=r},7153:(e,t)=>{var n;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return n}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(n||(n={}))},1802:(e,t,n)=>{e.exports=n(145)}};var t=require("../../../webpack-api-runtime.js");t.C(e);var n=t(t.s=9721);module.exports=n})();