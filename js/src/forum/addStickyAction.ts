import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import PostControls from 'flarum/forum/utils/PostControls';
import Button from 'flarum/common/components/Button';

export default function addStickyControl() {
  extend(PostControls, 'controls', function (items, post) {
    const discussion = post.discussion();
    const canSticky = discussion.canStickyPosts();
    if(canSticky){
      items.add(
        'sticky',
        Button.component(
          {
            icon: 'fas fa-thumbtack',
            onclick: () => {
              post.save({ is_sticky: !post.is_sticky() });
            },
          },
          app.translator.trans(post.is_sticky() ? 'xypp-sticky-posts.forum.unsticky' : 'xypp-sticky-posts.forum.sticky')
        )
      )
    }
  });
}