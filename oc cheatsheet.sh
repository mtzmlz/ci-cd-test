## create ci-cd-demo project
oc new-project ci-cd-demo \
    --description="CI-CD Demo project for NEXT Team" \
    --display-name="CI-CD Demo"
   
# create nodejs application pointing to github repo
oc new-app https://github.com/mtzmlz/ci-cd-test.git \
    --strategy=source \
    --env PORT=8080 \
    -l name=node-hello

oc new-app https://github.com/mtzmlz/ci-cd-test.git#master \
    --strategy=source \
    --env PORT=8080 \
    -l name=node-hello
# expose application by creating a service and a route
oc expose svc/ci-cd-test

# start a new build
oc start-build ci-cd-test -n ci-cd-demo

# delete application
oc delete all --all
# or
oc delete all -l app=<generated name>

# test github webhook
curl -H "X-GitHub-Event: push" -H "Content-Type: application/json" \
    -k -X POST --data-binary \
    @payload.json \
    https://api.starter-us-east-1.openshift.com:443/apis/build.openshift.io/v1/namespaces/ci-cd-demo/buildconfigs/ci-cd-test/webhooks/BtZuRFmZOgMmPYupwscg/github


# sonarqube token: 74490535ce6acdd4206d85283cc400cda3e98102
# sonarqube project key: ci-cd-demo2