## create ci-cd-demo project
oc new-project ci-cd-demo \
    --description="CI-CD Demo project for NEXT Team" \
    --display-name="CI-CD Demo"

# create nodejs application pointing to github repo
oc new-app https://github.com/mtzmlz/ci-cd-test.git \
    --strategy=source
    --env PORT=8080

# expose application by creating a service and a route
oc expose svc/ci-cd-test

# delete application
oc delete all --all
# or
oc delete all -l app=<generated name>