AFRAME.registerComponent('show-hide', {
    schema: {
        on: {type: 'string'},
        target: {type: 'selector'},
        src: {type: 'string'},
        dur: {type: 'number', default: 300},
        locations: {type: 'array'}
    },

    play: function () {
        var data = this.data;
        var el = this.el;
        var sceneEl = document.querySelector('a-scene');
        var places = sceneEl.querySelectorAll('.clickable');
        this.setupFadeAnimation();
        el.addEventListener(data.on, function () {
          data.target.emit('set-image-fade');

          //for(var i = 0; i < places.length; i++){
            //places[i].setAttribute('visible', false);
            //places[i].style.display = 'none';
          //}
          //for(var i = 0; i < this.data.locations.length; i++){
            //document.querySelector("#"+this.data.locations[i]).setAttribute('visible', true);
            //document.querySelector("#"+data.locations[i]).setAttribute('vis');
            //document.querySelector("#"+data.locations[i]).style.display = 'block';
          //}

        //   for(var i = 0; i < data.locations.length; i++){
        //     // document.querySelector("#"+data.locations[i]).setAttribute('visible', true);
        //     document.querySelector("#"+data.locations[i]).style.visibility = "visible";
        //     console.log(document.querySelector("#"+data.locations[i]));
        //   }

          setTimeout(function () {
            data.target.setAttribute('material', 'src', data.src);
            for(var i = 0; i < places.length; i++){
                places[i].setAttribute('visible', 'false');
            }
            for(var i = 0; i < data.locations.length; i++){
                document.querySelector("#"+data.locations[i]).setAttribute('visible', true);
            }
            //document.querySelector("#one").setAttribute('visible', 'false');
            //document.querySelector("#one").setAttribute('visible', 'true');
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