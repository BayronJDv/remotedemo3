
    export type RemoteKeys = 'REMOTE_ALIAS_IDENTIFIER/Lateral';
    type PackageType<T> = T extends 'REMOTE_ALIAS_IDENTIFIER/Lateral' ? typeof import('REMOTE_ALIAS_IDENTIFIER/Lateral') :any;