fx_version 'cerulean'
use_experimental_fxv2_oal 'yes'
lua54 'yes'
game 'gta5'

name 'ox_target edited for QBcore support'
author 'Overextended'
version '1.17.1'
repository 'https://github.com/overextended/ox_target'
description ''

ui_page 'web/index.html'

shared_scripts {
    '@ox_lib/init.lua',
    '@qb-core/shared.lua' -- Ensure QBCore shared script is included
}

client_scripts {
    'client/main.lua',
    'client/api.lua',
    'client/utils.lua',
    'client/state.lua',
    'client/debug.lua',
    'client/defaults.lua',
    'client/framework/nd.lua',
    'client/framework/ox.lua',
    'client/framework/esx.lua',
    'client/framework/qbx.lua',
    'client/framework/qb.lua', -- Add QBCore framework script
    'client/compat/qtarget.lua',
}

server_scripts {
    'server/main.lua'
}

files {
    'web/**',
    'locales/*.json'
}

provide 'qtarget'

dependency 'ox_lib'