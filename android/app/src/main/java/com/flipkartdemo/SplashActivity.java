package com.flipkartdemo;

import android.content.Intent;
import android.os.Bundle;

import androidx.appcompat.app.AppCompatActivity;

public class SplashActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedinstance) {
        super.onCreate(savedinstance);
        Intent i=new Intent(this,MainActivity.class);
        startActivity(i);
        finish();

    }
}
