jQuery(function(a){a("#namenewlist").attr("disabled","disabled");a("#blocknewlist").hide();a("#list0").click(function(){if(this.checked){a("#namenewlist").removeAttr("disabled");a("#blocknewlist").fadeIn()}else{a("#namenewlist").attr("disabled","disabled");a("#blocknewlist").fadeOut()}})});