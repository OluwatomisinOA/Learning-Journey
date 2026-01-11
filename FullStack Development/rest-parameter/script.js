function setPermissionLevel(permissionLevel, ...names) {

  names.forEach((name) =>
    console.log(`${name} now has ${permissionLevel} access.`));

}

setPermissionLevel('admin', 'Oswald', 'JesusStar', 'Star')