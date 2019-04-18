<template>
    <v-expansion-panel>
        <v-expansion-panel-content>
            <template v-slot:header>
                <div><h3>Hike Trails</h3></div>
            </template>
            <v-container grid-list-md text-xs-center>
                <v-layout row wrap>
                    <v-flex xs6 sm4 md3 x12 class="custom">
                        <v-card class="smokey">
                            <v-card-title primary-title>
                                <h3>Smokey</h3>
                            </v-card-title>
                        </v-card>
                    </v-flex>
                    <v-flex xs6 sm4 md3 x12 class="custom">
                        <v-card class="chimney">
                            <v-card-title primary-title>
                                <h3>Chimney</h3>
                            </v-card-title>
                        </v-card>
                    </v-flex>
                    <v-flex xs6 sm4 md3 x12 class="custom">
                        <v-card class="ashville">
                            <v-card-title primary-title>
                                <h3>GrandFather Mountain</h3>
                            </v-card-title>
                        </v-card>
                    </v-flex>
                    <v-flex xs6 sm4 md3 x12 class="custom">
                        <v-card class="charlotte">
                            <v-card-title primary-title>
                                <h3>Art Loeb Trail</h3>
                            </v-card-title>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-expansion-panel-content>
        <v-expansion-panel-content>
            <template v-slot:header>
                <div><h3>Best Cities</h3></div>
            </template>
            <v-container grid-list-md text-xs-center>
                <v-layout row wrap>
                    <v-flex xs6 sm4 md3 x12 class="custom">
                        <v-card class="smokey">
                            <v-card-title primary-title>
                                <h3>Charlotte</h3>
                            </v-card-title>
                        </v-card>
                    </v-flex>
                    <v-flex xs6 sm4 md3 x12 class="custom">
                        <v-card class="chimney">
                            <v-card-title primary-title>
                                <h3>Raleigh</h3>
                            </v-card-title>
                        </v-card>
                    </v-flex>
                    <v-flex xs6 sm4 md3 x12 class="custom">
                        <v-card class="ashville">
                            <v-card-title primary-title>
                                <h3>Durham</h3>
                            </v-card-title>
                        </v-card>
                    </v-flex>
                    <v-flex xs6 sm4 md3 x12 class="custom">
                        <v-card class="charlotte">
                            <v-card-title primary-title>
                                <h3>Wilmington</h3>
                            </v-card-title>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-expansion-panel-content>
        <v-expansion-panel-content>
            <template v-slot:header>
                <div><h3>Beaches</h3></div>
            </template>
            <v-container grid-list-md text-xs-center>
                <v-layout row wrap>
                    <v-flex xs6 sm4 md3 x12 class="custom">
                        <v-card class="smokey">
                            <v-card-title primary-title>
                                <h3>Cape Hatteras National Seashore</h3>
                            </v-card-title>
                        </v-card>
                    </v-flex>
                    <v-flex xs6 sm4 md3 x12 class="custom">
                        <v-card class="chimney">
                            <v-card-title primary-title>
                                <h3>Wrightsville Beach</h3>
                            </v-card-title>
                        </v-card>
                    </v-flex>
                    <v-flex xs6 sm4 md3 x12 class="custom">
                        <v-card class="ashville">
                            <v-card-title primary-title>
                                <h3>Nags Head</h3>
                            </v-card-title>
                        </v-card>
                    </v-flex>
                    <v-flex xs6 sm4 md3 x12 class="custom">
                        <v-card class="charlotte">
                            <v-card-title primary-title>
                                <h3>Topsail Beach</h3>
                            </v-card-title>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-expansion-panel-content>
        <v-expansion-panel-content>
            <template v-slot:header>
                <div><h3>Places to go Shopping</h3></div>
            </template>
            <v-container grid-list-md text-xs-center>
                <v-layout row wrap>
                    <v-flex xs6 sm4 md3 x12 class="custom">
                        <v-card class="smokey">
                            <v-card-title primary-title>
                                <h3>Brightleaf Square, Durham </h3>
                            </v-card-title>
                        </v-card>
                    </v-flex>
                    <v-flex xs6 sm4 md3 x12 class="custom">
                        <v-card class="chimney">
                            <v-card-title primary-title>
                                <h3>Mayfaire,Wilmington </h3>
                            </v-card-title>
                        </v-card>
                    </v-flex>
                    <v-flex xs6 sm4 md3 x12 class="custom">
                        <v-card class="ashville">
                            <v-card-title primary-title>
                                <h3>The Cotton Exchange,Wilmington</h3>
                            </v-card-title>
                        </v-card>
                    </v-flex>
                    <v-flex xs6 sm4 md3 x12 class="custom">
                        <v-card class="charlotte">
                            <v-card-title primary-title>
                                <h3>Concord Mills, Concord</h3>
                            </v-card-title>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-expansion-panel-content>
    </v-expansion-panel>
</template>

<script>
    export default {
        name: "Tourism"
    }
</script>

<style scoped>

</style>