(function() {
    'use strict';

    var canvas = document.getElementById('canvas');

    var engine = new Shape.Engine(canvas);
    var promise = new Promise((resolve) => { resolve(); });
    
    document.getElementById('go').addEventListener('click', start);
    
    function start() {
        document.getElementById('go').removeEventListener('click', start);
        promise.then(() => engine.toText('Happy'))
        .then(() => engine.shake())
        .then(() => engine.toText('Birthday'))
        .then(() => engine.shake())
        .then(() => engine.toText('to'))
        .then(() => engine.shake())
        .then(() => engine.toText('Orange'))
        .then(() => engine.shake())
        .then(() => engine.toText('! ! !'))
        .then(() => engine.shake())
        .then(() => engine.toText('^_^'))
        .then(() => engine.shake())
        .then(() => engine.toText('From Uncle Lamb'))
        .then(() => engine.shake())
        .then(() => engine.clear())
        .then(() => document.getElementById('go').addEventListener('click', start));
    }
})();
