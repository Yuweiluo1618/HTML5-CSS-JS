(function(){
    $.extend({
        min: function(a,b){
            return a > b ? b:a;
        },

        max: function(a, b){
            return a > b ? a:b;
        }

    });

    $.fn.extend(
        {
            check: function(){
                this.prop("checked", true);
            },

            uncheck: function(){
                this.prop("checked", false);
            },

            reverse: function(){
                this.each(function(){
                    this.checked = !this.checked;
                });
            }

        }
    );
})();