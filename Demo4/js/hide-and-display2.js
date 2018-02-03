AFRAME.registerComponent('show-hide', {
    schema: {
        on: {type: 'string'},
        target: {type: 'selector'},
        src: {type: 'string'},
        dur: {type: 'number', default: 400}
    },

    init: function () {
        var data = this.data;
        var el = this.el;
        var sceneEl = document.querySelector('a-scene');
        var places = sceneEl.querySelectorAll('.clickable');
        this.setupFadeAnimation();
        el.addEventListener(data.on, function () {
            data.target.emit('set-image-fade');
            setTimeout(function () {
                data.target.setAttribute('material', 'src', data.src);
                var parent = document.querySelector("#planes");
                while (parent.firstChild) {
                    parent.removeChild(parent.firstChild);
                }
                if(data.src == '#A'){
                    // CLICK NUMBER 2
                    let d = document.createElement('a-entity'); // SHOW NUMBER 1
                    d.setAttribute('position', `0 1 -10`);
                    d.setAttribute('template', {src: `#planeTemplate`});
                    d.setAttribute('data-id', `one`);
                    d.setAttribute('data-num', `1`);
                    d.setAttribute('show-hide', {on: 'click', target: '#sky', src: '#K'});
                    parent.appendChild(d);
                    let e = document.createElement('a-entity'); // SHOW NUMBER 3
                    e.setAttribute('position', `10 1 -5`);
                    e.setAttribute('template', {src: `#planeTemplate`});
                    e.setAttribute('data-id', `three`);
                    e.setAttribute('data-num', `3`);
                    e.setAttribute('show-hide', {on: 'click', target: '#sky', src: '#B'});
                    parent.appendChild(e);
                }
                if(data.src == '#K'){
                    // CLICK NUMBER 1 
                    let e = document.createElement('a-entity'); // SHOW NUMBER 2
                    e.setAttribute('position', `0 1 10`);
                    e.setAttribute('template', {src: `#planeTemplate`});
                    e.setAttribute('data-id', `two`);
                    e.setAttribute('data-num', `2`);
                    e.setAttribute('show-hide', {on: 'click', target: '#sky', src: '#A'});
                    parent.appendChild(e);
                }
                if(data.src == '#B'){
                    // CLICK NUMBER 3
                    let e = document.createElement('a-entity'); // SHOW NUMBER 4
                    e.setAttribute('position', `-6 1 7`);
                    e.setAttribute('template', {src: `#planeTemplate`});
                    e.setAttribute('data-id', `four`);
                    e.setAttribute('data-num', `4`);
                    e.setAttribute('show-hide', {on: 'click', target: '#sky', src: '#C'});
                    parent.appendChild(e);
                    let d = document.createElement('a-entity'); // SHOW NUMBER 5
                    d.setAttribute('position', `1.5 1 -5`);
                    d.setAttribute('template', {src: `#planeTemplate`});
                    d.setAttribute('data-id', `five`);
                    d.setAttribute('data-num', `5`);
                    d.setAttribute('show-hide', {on: 'click', target: '#sky', src: '#D'});
                    parent.appendChild(d);
                    let a = document.createElement('a-entity'); // SHOW NUMBER 2
                    a.setAttribute('position', `-10 1 4`);
                    a.setAttribute('template', {src: `#planeTemplate`});
                    a.setAttribute('data-id', `two`);
                    a.setAttribute('data-num', `2`);
                    a.setAttribute('show-hide', {on: 'click', target: '#sky', src: '#A'});
                    parent.appendChild(a);
                }
                if(data.src == '#C'){
                    //NUMBER 4
                    let e = document.createElement('a-entity'); // SHOW NUMBER 3
                    e.setAttribute('position', `-8 1 -7`);
                    e.setAttribute('template', {src: `#planeTemplate`});
                    e.setAttribute('data-id', `three`);
                    e.setAttribute('data-num', `3`);
                    e.setAttribute('show-hide', {on: 'click', target: '#sky', src: '#B'});
                    parent.appendChild(e);
                }
                if(data.src == '#D'){
                    //NUMBER 5
                    let e = document.createElement('a-entity'); // SHOW NUMBER 3
                    e.setAttribute('position', `-1.5 1 5`);
                    e.setAttribute('template', {src: `#planeTemplate`});
                    e.setAttribute('data-id', `three`);
                    e.setAttribute('data-num', `3`);
                    e.setAttribute('show-hide', {on: 'click', target: '#sky', src: '#B'});
                    parent.appendChild(e);
                }  
            }, data.dur);
        });
    },

    setupFadeAnimation: function () {
        var data = this.data;
        var targetEl = this.data.target;
        if (targetEl.dataset.setImageFadeSetup) { return; }
        targetEl.dataset.setImageFadeSetup = false;
        targetEl.dataset.setImageFadeSetup = false;
        targetEl.setAttribute('animation__fade', {
          property: 'material.color',
          startEvents: 'set-image-fade',
          dir: 'alternate',
          dur: data.dur,
          from: '#FFF',
          to: '#000'
        });
    }
});