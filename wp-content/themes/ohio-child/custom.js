(function( $ ) {
    let $firstTitle = 'Timeline';
    let $secondTitle = 'Role & Team Size';
    let $thirdTitle = 'Scope';
    let $firstMetatitle = $('.project-page-content .project-meta li:first-child .project-meta-title');
    let $secondMetatitle = $('.project-page-content .project-meta li:nth-child(2) .project-meta-title');
    let $thirdMetatitle = $('.project-page-content .project-meta li:last-child .project-meta-title');
    let $headTitle = $('head > title');
    let $projectHeadline = $('.project-page-content .headline');
    let $projectTaskDescription = $('.project-task .project-task-description');
    let $stickyNavTitle = $('.sticky-nav .sticky-nav-holder .sticky-nav_heading');
    let $breadcrumbActiveText = $('.breadcrumbs span.active');
    let $scroll = new SmoothScroll();

    $( document ).ready(function() {

        $headTitle.html(function(index,text){
            return text.replace('//n','&nbsp;');
        });

        if($firstMetatitle.length > 0) {
            $firstMetatitle.text($firstTitle)
        }

        if($secondMetatitle.length > 0) {
            $secondMetatitle.text($secondTitle)
        }

        if($thirdMetatitle.length > 0) {
            $thirdMetatitle.text($thirdTitle)
        }

        $projectHeadline.html(function(index,text){
            //return text.replace('//n','<br />');
            return text.replace(': ',': <br />');
        });
        $projectHeadline.fadeIn();

        $projectTaskDescription.html(function(index,text){
            return text.replace('//h5','<h5 style="margin-top: 0px;margin-bottom: 20px;">');
        });
        $projectTaskDescription.html(function(index,text){
            return text.replace('///h5','</h5>');
        });
        $projectTaskDescription.html(function(index,text){
            return text.replace('//n//n','<br /><br />');
        });
        $projectTaskDescription.html(function(index,text){
            return text.replace('///n///n','<br /><br />');
        });

        $breadcrumbActiveText.html(function(index,text){
            return text.replace('//n','&nbsp;');
        });

        $stickyNavTitle.html(function(index,text){
            return text.replace('//n','&nbsp;');
        });
        $stickyNavTitle.fadeIn();

        projectTitleReplace();
    });

    function projectTitleReplace() {
        if($('.ohio-recent-projects-sc').length > 0) {
            $('.ohio-recent-projects-sc .portfolio-item').each(function(index, item) {

                var $this = $(item).find('.portfolio-item-headline');
                var $title = $this.text();
                //$(this).text(text.replace('dog', 'doll'));
                $this.text($title.replace('//n', ' '));

                //$(item).find('.portfolio-item-headline').text().replace("//n", " ");

                //let p = $("#id1 p:contains('dog')");

                console.log($this.text());
            });
        }
    }

    $(document).on("click", ".view-portfolio a.button", function(e) {
        e.preventDefault();
        var anchor = document.querySelector('#portfolio-section');
        $scroll.animateScroll(anchor);
    });

    $(document).on("click", ".view-capabilities a.button", function(e) {
        e.preventDefault();
        var anchor = document.querySelector('#capabilities-section');
        $scroll.animateScroll(anchor);
    });

})( jQuery );
