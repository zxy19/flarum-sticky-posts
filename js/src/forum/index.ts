import Discussion from 'flarum/common/models/Discussion';
import Post from 'flarum/common/models/Post';
import app from 'flarum/forum/app';
import addStickyControl from './addStickyAction';
import addStickyIcon from './addStickyIcon';

app.initializers.add('xypp/flarum-sticky-posts', () => {
  Post.prototype.is_sticky = Post.attribute('is_sticky');
  Discussion.prototype.canStickyPosts = Discussion.attribute('canStickyPosts');
  addStickyControl();
  addStickyIcon();
});