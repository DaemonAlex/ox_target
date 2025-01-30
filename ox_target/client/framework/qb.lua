local QBCore = exports['qb-core']:GetCoreObject()

function GetPlayerData()
    return QBCore.Functions.GetPlayerData()
end

RegisterNetEvent('ox_target:exampleEvent', function()
    local playerData = GetPlayerData()
    print('Player Data:', playerData)
end)