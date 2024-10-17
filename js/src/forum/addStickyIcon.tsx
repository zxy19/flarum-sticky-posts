import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import CommentPost from 'flarum/forum/components/CommentPost';

export default function addStickyIcon() {
    extend(CommentPost.prototype, 'headerItems', function (items) {
        if (this.attrs.post.is_sticky()) {
            items.setPriority('meta', 50);
            items.add('sticky', <span className='sticky'>
                <i class="fas fa-thumbtack"></i>
                {app.translator.trans('xypp-sticky-posts.forum.sticky_icon')}
            </span>, 0.5);
        }
    });
}
