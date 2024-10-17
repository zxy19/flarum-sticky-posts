<?php

namespace Xypp\StickyPosts\Listener;
use Flarum\Post\Event\Saving;
use Illuminate\Support\Arr;

class SavingStickyPosts
{
    public function __invoke(Saving $event)
    {
        if (!is_null($isSticky = Arr::get($event->data, 'attributes.is_sticky', null))) {
            if ($event->actor->id == $event->post->discussion->user_id && $event->actor->can('sticky_posts_by_starter')) {
                // Starter can sticky, no need to check permissions
            } else {
                $event->actor->assertCan("sticky_posts", $event->post->discussion);
            }

            $event->post->is_sticky = $isSticky;
        }
    }
}