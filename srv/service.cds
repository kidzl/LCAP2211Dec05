using { ZLCICDDEC0506 as my } from '../db/schema';

using ZLCICDDEC0506 from '../db/schema';

@path : 'service/ZLCICDDEC0506'
service ZLCICDDEC0506Service
{
    entity SrvBooks as
        projection on my.Books
        {
            *
        };
}

annotate ZLCICDDEC0506Service with @requires :
[
    'authenticated-user'
];
