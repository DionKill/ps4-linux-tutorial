// Script that houses functions to store user choices for setup

export function saveChoiceInstallation(type) {
    sessionStorage.setItem('installType', type)
    if (type === 'internal') {
        location.href = '/internal-installation/'
    } else if (type === 'external-1') {
        location.href = '/external-installation-1'
    } else {
        location.href = '/external-installation-2'
    }
}

export function getChoiceInstallation() {
    return sessionStorage.getItem('installType')
}

export function saveChoiceSouthbridge(type) {
    sessionStorage.setItem('southbridgeType', type)
    if (type === 'aeolia' || type === 'belize') {
        location.href = '/aeolia-belize-southbridge/'
    } else {
        location.href = '/baikal-southbridge/'
    }
}

export function getChoiceSouthbridge() {
    return sessionStorage.getItem('southbridgeType')
}
