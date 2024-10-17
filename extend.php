<?php

/*
 * This file is part of xypp/flarum-sticky-posts.
 *
 * Copyright (c) 2024 小鱼飘飘.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Xypp\StickyPosts;

use Flarum\Api\Serializer\DiscussionSerializer;
use Flarum\Api\Serializer\PostSerializer;
use Flarum\Extend;
use Flarum\Http\RequestUtil;
use Flarum\Post\Event\Saving;
use Xypp\StickyPosts\Listener\SavingStickyPosts;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js')
        ->css(__DIR__ . '/less/admin.less'),
    new Extend\Locales(__DIR__ . '/locale'),
    (new Extend\Event)
        ->listen(Saving::class, SavingStickyPosts::class),
    (new Extend\ApiSerializer(DiscussionSerializer::class))
        ->attribute('canStickyPosts', function (DiscussionSerializer $serializer, $model, $attrs) {
            $actor = RequestUtil::getActor($serializer->getRequest());
            if ($model->user_id == $actor->id) {
                if ($actor->can('sticky_posts_by_starter', $model))
                    return true;
            }
            return $actor->can('sticky_posts', $model);
        }),
    (new Extend\ApiSerializer(PostSerializer::class))
        ->attribute('is_sticky', function (PostSerializer $serializer, $model, $attrs) {
            return $model->is_sticky;
        }),
];
