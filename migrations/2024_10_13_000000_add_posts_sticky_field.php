<?php
use Flarum\Database\Migration;

return Migration::addColumns('posts', [
    'is_sticky' => ['boolean', 'default' => 0]
]);
