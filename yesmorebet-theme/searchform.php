<?php
/**
 * Search form template
 *
 * @package YesMoreBet
 */
?>

<form role="search" method="get" class="search-form" action="<?php echo esc_url(home_url('/')); ?>" style="max-width: 32rem; margin: 0 auto;">
    <div style="position: relative;">
        <input
            type="search"
            class="form-input"
            placeholder="<?php echo esc_attr_x('Rechercher...', 'placeholder', 'yesmorebet'); ?>"
            value="<?php echo get_search_query(); ?>"
            name="s"
            style="width: 100%; padding-right: 3rem;"
        />
        <button
            type="submit"
            style="position: absolute; right: 0.5rem; top: 50%; transform: translateY(-50%); background: linear-gradient(to right, #facc15, #ca8a04); border: none; border-radius: 0.375rem; padding: 0.5rem 1rem; cursor: pointer;"
        >
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="color: black;">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
        </button>
    </div>
</form>
