<?php
/*
Template Name: Full Width
*/
get_header(); ?>

		<!-- Row for main content area -->
		<div id="content" class="sixteen columns" role="main">
	
			<div class="post-box">
				<?php get_template_part('loop', 'page'); ?>
			</div>

		</div><!-- End Content row -->
		

		
<?php get_footer(); ?>