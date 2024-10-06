from flask import Flask, jsonify, request
from supabase import create_client, Client

# Initialize Supabase client
url = 'https://xerznahnphhiokptbyjx.supabase.co'
key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhlcnpuYWhucGhoaW9rcHRieWp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgxMzM0MzIsImV4cCI6MjA0MzcwOTQzMn0.43Ix3rbImmo4f_n0LiGU0TW7FbexOs4O31zgwc5ppTI'
supabase: Client = create_client(url, key)

def get_db() -> Client:
    """Return the Supabase client."""
    return supabase