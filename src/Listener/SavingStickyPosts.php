<?php

namespace Xypp\StickyPosts\Listener;
use Flarum\Post\Event\Saving;
use Illuminate\Support\Arr;

class SavingStickyPosts
{
    public function __invoke(Saving $event)
    {
        if ($isSticky = Arr::get($event->data, 'attributes.is_sticky')) {
            $event->actor->assertCan("sticky_posts", $event->post->discussion);

            $event->post->is_sticky = $isSticky;
        }
    }
}