<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Gerando usuario de teste
        factory(\App\User::class)->create([
            'email' => 'admin@user.com'
        ]);
    }
}
