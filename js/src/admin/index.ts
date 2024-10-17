import app from 'flarum/admin/app';

app.initializers.add('xypp/flarum-sticky-posts', () => {
  app.extensionData.for('xypp-sticky-posts').registerPermission(
    {
      icon: 'fas fa-thumbtack',
      label: app.translator.trans('xypp-sticky-posts.admin.permission.sticky_posts'),
      permission: 'discussion.sticky_posts',
    },
    'moderate'
  ).registerPermission(
    {
      icon: 'fas fa-thumbtack',
      label: app.translator.trans('xypp-sticky-posts.admin.permission.sticky_posts_by_starter'),
      permission: 'discussion.sticky_posts_by_starter',
    },
    'moderate'
  );
});
