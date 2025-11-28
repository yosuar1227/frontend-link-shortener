//backend backup for frotend link shortener
terraform {
  backend "s3" {
    bucket         = "terraform-state-link-shortener"
    key            = "prod/frontend-link-shortener/terraform.tfstate"
    region         = "us-east-2"
    dynamodb_table = "terraform-locks"
    encrypt        = true
  }
}