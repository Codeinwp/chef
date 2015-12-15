/*
Upsells
*/

jQuery(document).ready(function() {

	/* Upsells in customizer (Documentation link and Upgrade to PRO link */


	if( !jQuery( ".chef-upsells" ).length ) {
		jQuery('#customize-theme-controls > ul').prepend('<li class="accordion-section chef-upsells" style="padding-bottom: 15px">');
		}

    if( jQuery( ".chef-upsells" ).length ) {

  		jQuery('.chef-upsells').append('<a style="width: 80%; margin: 5px auto 5px auto; display: block; text-align: center;" href="http://flyfreemedia.com/documentation/chef/" class="button" target="_blank">{documentation}</a>'.replace('{documentation}', chefCustomizerObject.documentation));
  		jQuery('.chef-upsells').append('<a style="width: 80%; margin: 5px auto 5px auto; display: block; text-align: center;" href="https://github.com/Codeinwp/chef" class="button" target="_blank">{github}</a>'.replace('{github}', chefCustomizerObject.github));
  		jQuery('.chef-upsells').append('<a style="width: 80%; margin: 5px auto 5px auto; display: block; text-align: center;" href="https://wordpress.org/support/view/theme-reviews/chef#postform" class="button" target="_blank">{review}</a>'.replace('{review}', chefCustomizerObject.review));

  	}

	if ( !jQuery( ".chef-upsells" ).length ) {
		jQuery('#customize-theme-controls > ul').prepend('</li>');
	}
});
