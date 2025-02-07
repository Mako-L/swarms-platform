import { MarkerType } from 'reactflow';

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      create_now_accounts: {
        Row: {
          created_at: string
          customer_id: string | null
          id: number
          name: string | null
        }
        Insert: {
          created_at?: string
          customer_id?: string | null
          id?: number
          name?: string | null
        }
        Update: {
          created_at?: string
          customer_id?: string | null
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      create_now_gallery: {
        Row: {
          created_at: string
          gallery_id: number
          gen_id: number | null
          likes: number | null
          link: string | null
          runid: string | null
          type: string | null
        }
        Insert: {
          created_at?: string
          gallery_id?: number
          gen_id?: number | null
          likes?: number | null
          link?: string | null
          runid?: string | null
          type?: string | null
        }
        Update: {
          created_at?: string
          gallery_id?: number
          gen_id?: number | null
          likes?: number | null
          link?: string | null
          runid?: string | null
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "gallery_gen_id_fkey"
            columns: ["gen_id"]
            isOneToOne: false
            referencedRelation: "create_now_gen_history"
            referencedColumns: ["id"]
          },
        ]
      }
      create_now_gen_history: {
        Row: {
          created_at: string
          gen_type: string
          id: number
          link: string | null
          metadata: Json
          model: string
          prompt: string | null
          public_state: boolean
          run_id: string | null
        }
        Insert: {
          created_at?: string
          gen_type: string
          id?: number
          link?: string | null
          metadata: Json
          model: string
          prompt?: string | null
          public_state?: boolean
          run_id?: string | null
        }
        Update: {
          created_at?: string
          gen_type?: string
          id?: number
          link?: string | null
          metadata?: Json
          model?: string
          prompt?: string | null
          public_state?: boolean
          run_id?: string | null
        }
        Relationships: []
      }
      create_now_gen_types: {
        Row: {
          gentype: string
          id: number
        }
        Insert: {
          gentype: string
          id?: number
        }
        Update: {
          gentype?: string
          id?: number
        }
        Relationships: []
      }
      create_now_models: {
        Row: {
          created_at: string
          id: number
          modelname: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          modelname?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          modelname?: string | null
        }
        Relationships: []
      }
      create_now_referrals: {
        Row: {
          created_at: string
          id: string
          referrals: number | null
        }
        Insert: {
          created_at?: string
          id: string
          referrals?: number | null
        }
        Update: {
          created_at?: string
          id?: string
          referrals?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "create_now_referrals_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      customers: {
        Row: {
          id: string
          stripe_customer_id: string | null
        }
        Insert: {
          id: string
          stripe_customer_id?: string | null
        }
        Update: {
          id?: string
          stripe_customer_id?: string | null
        }
        Relationships: []
      }
      invoices: {
        Row: {
          created: string | null
          created_at: string
          id: string
          is_paid: boolean | null
          metadata: Json | null
          period_at: string | null
          period_end: string | null
          reason: string | null
          status: string | null
          status_transitions: Json | null
          stripe_customer_id: string | null
          total: number | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created?: string | null
          created_at?: string
          id: string
          is_paid?: boolean | null
          metadata?: Json | null
          period_at?: string | null
          period_end?: string | null
          reason?: string | null
          status?: string | null
          status_transitions?: Json | null
          stripe_customer_id?: string | null
          total?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created?: string | null
          created_at?: string
          id?: string
          is_paid?: boolean | null
          metadata?: Json | null
          period_at?: string | null
          period_end?: string | null
          reason?: string | null
          status?: string | null
          status_transitions?: Json | null
          stripe_customer_id?: string | null
          total?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_invoices_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      prices: {
        Row: {
          active: boolean | null
          currency: string | null
          description: string | null
          id: string
          interval: Database["public"]["Enums"]["pricing_plan_interval"] | null
          interval_count: number | null
          metadata: Json | null
          product_id: string | null
          trial_period_days: number | null
          type: Database["public"]["Enums"]["pricing_type"] | null
          unit_amount: number | null
        }
        Insert: {
          active?: boolean | null
          currency?: string | null
          description?: string | null
          id: string
          interval?: Database["public"]["Enums"]["pricing_plan_interval"] | null
          interval_count?: number | null
          metadata?: Json | null
          product_id?: string | null
          trial_period_days?: number | null
          type?: Database["public"]["Enums"]["pricing_type"] | null
          unit_amount?: number | null
        }
        Update: {
          active?: boolean | null
          currency?: string | null
          description?: string | null
          id?: string
          interval?: Database["public"]["Enums"]["pricing_plan_interval"] | null
          interval_count?: number | null
          metadata?: Json | null
          product_id?: string | null
          trial_period_days?: number | null
          type?: Database["public"]["Enums"]["pricing_type"] | null
          unit_amount?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "prices_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          active: boolean | null
          description: string | null
          id: string
          image: string | null
          metadata: Json | null
          name: string | null
        }
        Insert: {
          active?: boolean | null
          description?: string | null
          id: string
          image?: string | null
          metadata?: Json | null
          name?: string | null
        }
        Update: {
          active?: boolean | null
          description?: string | null
          id?: string
          image?: string | null
          metadata?: Json | null
          name?: string | null
        }
        Relationships: []
      }
      referrals: {
        Row: {
          created_at: string | null
          id: number
          referred_id: string | null
          referrer_id: string | null
          status: string
        }
        Insert: {
          created_at?: string | null
          id?: never
          referred_id?: string | null
          referrer_id?: string | null
          status: string
        }
        Update: {
          created_at?: string | null
          id?: never
          referred_id?: string | null
          referrer_id?: string | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "referrals_referred_id_fkey"
            columns: ["referred_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "referrals_referrer_id_fkey"
            columns: ["referrer_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      subscriptions: {
        Row: {
          cancel_at: string | null
          cancel_at_period_end: boolean | null
          canceled_at: string | null
          created: string
          current_period_end: string
          current_period_start: string
          ended_at: string | null
          id: string
          metadata: Json | null
          price_id: string | null
          quantity: number | null
          status: Database["public"]["Enums"]["subscription_status"] | null
          trial_end: string | null
          trial_start: string | null
          user_id: string
        }
        Insert: {
          cancel_at?: string | null
          cancel_at_period_end?: boolean | null
          canceled_at?: string | null
          created?: string
          current_period_end?: string
          current_period_start?: string
          ended_at?: string | null
          id: string
          metadata?: Json | null
          price_id?: string | null
          quantity?: number | null
          status?: Database["public"]["Enums"]["subscription_status"] | null
          trial_end?: string | null
          trial_start?: string | null
          user_id: string
        }
        Update: {
          cancel_at?: string | null
          cancel_at_period_end?: boolean | null
          canceled_at?: string | null
          created?: string
          current_period_end?: string
          current_period_start?: string
          ended_at?: string | null
          id?: string
          metadata?: Json | null
          price_id?: string | null
          quantity?: number | null
          status?: Database["public"]["Enums"]["subscription_status"] | null
          trial_end?: string | null
          trial_start?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_price_id_fkey"
            columns: ["price_id"]
            isOneToOne: false
            referencedRelation: "prices"
            referencedColumns: ["id"]
          },
        ]
      }
      swarm_cloud_billing_transcations: {
        Row: {
          created_at: string
          id: string
          invoice_id: string | null
          payment_successful: boolean
          stripe_customer_id: string | null
          total_montly_cost: number | null
          transaction_id: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          invoice_id?: string | null
          payment_successful?: boolean
          stripe_customer_id?: string | null
          total_montly_cost?: number | null
          transaction_id?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          invoice_id?: string | null
          payment_successful?: boolean
          stripe_customer_id?: string | null
          total_montly_cost?: number | null
          transaction_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Swarm Cloud Billing Transcations_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      swarms_cloud_agents: {
        Row: {
          agent: string | null
          created_at: string
          description: string | null
          id: string
          image_url: string | null
          language: string | null
          name: string | null
          requirements: Json | null
          search_type: string
          status: Database["public"]["Enums"]["user_agents_status"] | null
          tags: string | null
          use_cases: Json | null
          user_id: string | null
        }
        Insert: {
          agent?: string | null
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          language?: string | null
          name?: string | null
          requirements?: Json | null
          search_type?: string
          status?: Database["public"]["Enums"]["user_agents_status"] | null
          tags?: string | null
          use_cases?: Json | null
          user_id?: string | null
        }
        Update: {
          agent?: string | null
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          language?: string | null
          name?: string | null
          requirements?: Json | null
          search_type?: string
          status?: Database["public"]["Enums"]["user_agents_status"] | null
          tags?: string | null
          use_cases?: Json | null
          user_id?: string | null
        }
        Relationships: []
      }
      swarms_cloud_api_activities: {
        Row: {
          api_key_id: string | null
          created_at: string
          echo: boolean | null
          id: string
          input_cost: number | null
          input_tokens: number | null
          invoice_total_cost: number
          max_tokens: number | null
          messages: Json | null
          model_id: string | null
          organization_id: string | null
          output_cost: number | null
          output_tokens: number | null
          repetition_penalty: number | null
          request_count: number
          stream: boolean | null
          temperature: number | null
          top_p: number | null
          total_cost: number | null
          user_id: string
        }
        Insert: {
          api_key_id?: string | null
          created_at?: string
          echo?: boolean | null
          id?: string
          input_cost?: number | null
          input_tokens?: number | null
          invoice_total_cost?: number
          max_tokens?: number | null
          messages?: Json | null
          model_id?: string | null
          organization_id?: string | null
          output_cost?: number | null
          output_tokens?: number | null
          repetition_penalty?: number | null
          request_count?: number
          stream?: boolean | null
          temperature?: number | null
          top_p?: number | null
          total_cost?: number | null
          user_id: string
        }
        Update: {
          api_key_id?: string | null
          created_at?: string
          echo?: boolean | null
          id?: string
          input_cost?: number | null
          input_tokens?: number | null
          invoice_total_cost?: number
          max_tokens?: number | null
          messages?: Json | null
          model_id?: string | null
          organization_id?: string | null
          output_cost?: number | null
          output_tokens?: number | null
          repetition_penalty?: number | null
          request_count?: number
          stream?: boolean | null
          temperature?: number | null
          top_p?: number | null
          total_cost?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_swarms_cloud_api_activities_api_key_id_fkey"
            columns: ["api_key_id"]
            isOneToOne: false
            referencedRelation: "swarms_cloud_api_keys"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_swarms_cloud_api_activities_model_id_fkey"
            columns: ["model_id"]
            isOneToOne: false
            referencedRelation: "swarms_cloud_models"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_swarms_cloud_api_activities_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "swarms_cloud_organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_swarms_cloud_api_activities_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      swarms_cloud_api_keys: {
        Row: {
          created_at: string
          id: string
          is_deleted: boolean | null
          key: string
          limit_credit_dollar: number | null
          name: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_deleted?: boolean | null
          key: string
          limit_credit_dollar?: number | null
          name?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          is_deleted?: boolean | null
          key?: string
          limit_credit_dollar?: number | null
          name?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_swarms_cloud_api_keys_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      swarms_cloud_blacklists: {
        Row: {
          created_at: string
          id: string
          list: Json | null
          type: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          list?: Json | null
          type?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          list?: Json | null
          type?: string | null
        }
        Relationships: []
      }
      swarms_cloud_comments: {
        Row: {
          content: string | null
          created_at: string
          id: string
          is_edited: boolean
          like_count: number
          model_id: string | null
          model_type: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: string
          is_edited?: boolean
          like_count?: number
          model_id?: string | null
          model_type?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: string
          is_edited?: boolean
          like_count?: number
          model_id?: string | null
          model_type?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "swarms_cloud_comments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      swarms_cloud_comments_replies: {
        Row: {
          comment_id: string
          content: string | null
          created_at: string
          id: string
          is_edited: boolean
          updated_at: string | null
          user_id: string
        }
        Insert: {
          comment_id?: string
          content?: string | null
          created_at?: string
          id?: string
          is_edited?: boolean
          updated_at?: string | null
          user_id: string
        }
        Update: {
          comment_id?: string
          content?: string | null
          created_at?: string
          id?: string
          is_edited?: boolean
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "swarms_cloud_comments_replies_comment_id_fkey"
            columns: ["comment_id"]
            isOneToOne: false
            referencedRelation: "swarms_cloud_comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "swarms_cloud_comments_replies_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      swarms_cloud_likes: {
        Row: {
          created_at: string
          id: string
          item_id: string
          item_type: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          item_id: string
          item_type: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          item_id?: string
          item_type?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "swarms_cloud_likes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      swarms_cloud_models: {
        Row: {
          api_endpoint: string | null
          context_length: number | null
          created_at: string
          creator: string | null
          default_config: Json | null
          description: string | null
          docs: Json | null
          enabled: boolean | null
          id: string
          image_url: string | null
          model_card_md: string | null
          model_parameter: string | null
          model_type: Database["public"]["Enums"]["model_type"] | null
          name: string | null
          per_1k_input_price: number | null
          per_1k_output_price: number | null
          price_million_input: number | null
          price_million_output: number | null
          provider: string | null
          slug: string | null
          support_functions: boolean | null
          tags: string | null
          unique_name: string
          updated_at: string | null
          use_cases: Json | null
        }
        Insert: {
          api_endpoint?: string | null
          context_length?: number | null
          created_at?: string
          creator?: string | null
          default_config?: Json | null
          description?: string | null
          docs?: Json | null
          enabled?: boolean | null
          id?: string
          image_url?: string | null
          model_card_md?: string | null
          model_parameter?: string | null
          model_type?: Database["public"]["Enums"]["model_type"] | null
          name?: string | null
          per_1k_input_price?: number | null
          per_1k_output_price?: number | null
          price_million_input?: number | null
          price_million_output?: number | null
          provider?: string | null
          slug?: string | null
          support_functions?: boolean | null
          tags?: string | null
          unique_name: string
          updated_at?: string | null
          use_cases?: Json | null
        }
        Update: {
          api_endpoint?: string | null
          context_length?: number | null
          created_at?: string
          creator?: string | null
          default_config?: Json | null
          description?: string | null
          docs?: Json | null
          enabled?: boolean | null
          id?: string
          image_url?: string | null
          model_card_md?: string | null
          model_parameter?: string | null
          model_type?: Database["public"]["Enums"]["model_type"] | null
          name?: string | null
          per_1k_input_price?: number | null
          per_1k_output_price?: number | null
          price_million_input?: number | null
          price_million_output?: number | null
          provider?: string | null
          slug?: string | null
          support_functions?: boolean | null
          tags?: string | null
          unique_name?: string
          updated_at?: string | null
          use_cases?: Json | null
        }
        Relationships: []
      }
      swarms_cloud_monthly_usage: {
        Row: {
          api_requests_count: number | null
          created_at: string
          id: string
          month: string | null
          usage: number | null
          user_id: string | null
        }
        Insert: {
          api_requests_count?: number | null
          created_at?: string
          id?: string
          month?: string | null
          usage?: number | null
          user_id?: string | null
        }
        Update: {
          api_requests_count?: number | null
          created_at?: string
          id?: string
          month?: string | null
          usage?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_swarms_cloud_monthly_usage_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      swarms_cloud_organization_member_invites: {
        Row: {
          created_at: string
          email: string | null
          id: string
          invite_by_user_id: string | null
          organization_id: string | null
          role: Database["public"]["Enums"]["organization_member_role"] | null
          secret_code: string | null
          status:
            | Database["public"]["Enums"]["organization_member_invite_status"]
            | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: string
          invite_by_user_id?: string | null
          organization_id?: string | null
          role?: Database["public"]["Enums"]["organization_member_role"] | null
          secret_code?: string | null
          status?:
            | Database["public"]["Enums"]["organization_member_invite_status"]
            | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: string
          invite_by_user_id?: string | null
          organization_id?: string | null
          role?: Database["public"]["Enums"]["organization_member_role"] | null
          secret_code?: string | null
          status?:
            | Database["public"]["Enums"]["organization_member_invite_status"]
            | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_swarms_cloud_organization_member_invites_invite_by_user_"
            columns: ["invite_by_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_swarms_cloud_organization_member_invites_organization_id"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "swarms_cloud_organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_swarms_cloud_organization_member_invites_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      swarms_cloud_organization_members: {
        Row: {
          created_at: string
          deleted_by_user_id: string | null
          id: string
          invite_by_user_id: string | null
          is_deleted: boolean | null
          organization_id: string | null
          role: Database["public"]["Enums"]["organization_member_role"] | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          deleted_by_user_id?: string | null
          id?: string
          invite_by_user_id?: string | null
          is_deleted?: boolean | null
          organization_id?: string | null
          role?: Database["public"]["Enums"]["organization_member_role"] | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          deleted_by_user_id?: string | null
          id?: string
          invite_by_user_id?: string | null
          is_deleted?: boolean | null
          organization_id?: string | null
          role?: Database["public"]["Enums"]["organization_member_role"] | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_swarms_cloud_organization_members_deleted_by_user_id_fke"
            columns: ["deleted_by_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_swarms_cloud_organization_members_invited_by_user_id_fke"
            columns: ["invite_by_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_swarms_cloud_organization_members_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "swarms_cloud_organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_swarms_cloud_organization_members_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      swarms_cloud_organizations: {
        Row: {
          created_at: string
          id: string
          name: string | null
          owner_user_id: string | null
          public_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          name?: string | null
          owner_user_id?: string | null
          public_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          name?: string | null
          owner_user_id?: string | null
          public_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_swarms_cloud_organizations_owner_user_id_fkey"
            columns: ["owner_user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      swarms_cloud_prompts: {
        Row: {
          created_at: string
          description: string | null
          id: string
          image_url: string | null
          name: string | null
          prompt: string | null
          search_type: string
          status: Database["public"]["Enums"]["user_prompts_status"] | null
          tags: string | null
          use_cases: Json | null
          user_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          name?: string | null
          prompt?: string | null
          search_type?: string
          status?: Database["public"]["Enums"]["user_prompts_status"] | null
          tags?: string | null
          use_cases?: Json | null
          user_id?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          name?: string | null
          prompt?: string | null
          search_type?: string
          status?: Database["public"]["Enums"]["user_prompts_status"] | null
          tags?: string | null
          use_cases?: Json | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "swarms_cloud_prompts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      swarms_cloud_rate_limits: {
        Row: {
          created_at: string
          id: string
          last_request_at: string | null
          request_count: number | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          last_request_at?: string | null
          request_count?: number | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          last_request_at?: string | null
          request_count?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "swarms_cloud_rate_limits_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      swarms_cloud_reviews: {
        Row: {
          comment: string | null
          created_at: string
          id: string
          model_id: string | null
          model_type: string | null
          rating: number | null
          user_id: string
        }
        Insert: {
          comment?: string | null
          created_at?: string
          id?: string
          model_id?: string | null
          model_type?: string | null
          rating?: number | null
          user_id: string
        }
        Update: {
          comment?: string | null
          created_at?: string
          id?: string
          model_id?: string | null
          model_type?: string | null
          rating?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "swarms_cloud_reviews_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      swarms_cloud_tools: {
        Row: {
          created_at: string
          description: string | null
          id: string
          image_url: string | null
          language: string | null
          name: string | null
          requirements: Json | null
          status: Database["public"]["Enums"]["user_agents_status"] | null
          tags: string | null
          tool: string
          use_cases: Json | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          language?: string | null
          name?: string | null
          requirements?: Json | null
          status?: Database["public"]["Enums"]["user_agents_status"] | null
          tags?: string | null
          tool: string
          use_cases?: Json | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          language?: string | null
          name?: string | null
          requirements?: Json | null
          status?: Database["public"]["Enums"]["user_agents_status"] | null
          tags?: string | null
          tool?: string
          use_cases?: Json | null
          user_id?: string | null
        }
        Relationships: []
      }
      swarms_cloud_user_swarms: {
        Row: {
          code: string | null
          created_at: string
          description: string | null
          id: string
          image_url: string | null
          name: string | null
          pr_id: string | null
          pr_link: string | null
          status: Database["public"]["Enums"]["user_swarms_status"] | null
          tags: string | null
          use_cases: Json | null
          user_id: string | null
        }
        Insert: {
          code?: string | null
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          name?: string | null
          pr_id?: string | null
          pr_link?: string | null
          status?: Database["public"]["Enums"]["user_swarms_status"] | null
          tags?: string | null
          use_cases?: Json | null
          user_id?: string | null
        }
        Update: {
          code?: string | null
          created_at?: string
          description?: string | null
          id?: string
          image_url?: string | null
          name?: string | null
          pr_id?: string | null
          pr_link?: string | null
          status?: Database["public"]["Enums"]["user_swarms_status"] | null
          tags?: string | null
          use_cases?: Json | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_swarms_cloud_user_swarms_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      swarms_cloud_users_credits: {
        Row: {
          created_at: string
          credit: number
          credit_count: number
          credit_grant: number | null
          credit_limit: number
          free_credit: number
          free_credit_expire_date: string | null
          id: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          credit?: number
          credit_count?: number
          credit_grant?: number | null
          credit_limit?: number
          free_credit?: number
          free_credit_expire_date?: string | null
          id?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          credit?: number
          credit_count?: number
          credit_grant?: number | null
          credit_limit?: number
          free_credit?: number
          free_credit_expire_date?: string | null
          id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_swarms_cloud_users_credits_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      swarms_cloud_users_tiers: {
        Row: {
          created_at: string
          id: string
          tier: Database["public"]["Enums"]["user_tier"] | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          tier?: Database["public"]["Enums"]["user_tier"] | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          tier?: Database["public"]["Enums"]["user_tier"] | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_swarms_cloud_users_tiers_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      swarms_cloud_users_wallets: {
        Row: {
          balance: number | null
          created_at: string
          expire_date: string | null
          id: string
          is_deleted: boolean | null
          is_expired: boolean | null
          name: string | null
          order: number | null
          user_id: string | null
        }
        Insert: {
          balance?: number | null
          created_at?: string
          expire_date?: string | null
          id?: string
          is_deleted?: boolean | null
          is_expired?: boolean | null
          name?: string | null
          order?: number | null
          user_id?: string | null
        }
        Update: {
          balance?: number | null
          created_at?: string
          expire_date?: string | null
          id?: string
          is_deleted?: boolean | null
          is_expired?: boolean | null
          name?: string | null
          order?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "swarms_cloud_users_wallets_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      swarms_cloud_users_wallets_transactions: {
        Row: {
          amount: number | null
          created_at: string
          description: string | null
          id: string
          new_balance: number | null
          old_balance: number | null
          type:
            | Database["public"]["Enums"]["users_wallets_transaction_type"]
            | null
          user_id: string | null
          wallet_id: string | null
        }
        Insert: {
          amount?: number | null
          created_at?: string
          description?: string | null
          id?: string
          new_balance?: number | null
          old_balance?: number | null
          type?:
            | Database["public"]["Enums"]["users_wallets_transaction_type"]
            | null
          user_id?: string | null
          wallet_id?: string | null
        }
        Update: {
          amount?: number | null
          created_at?: string
          description?: string | null
          id?: string
          new_balance?: number | null
          old_balance?: number | null
          type?:
            | Database["public"]["Enums"]["users_wallets_transaction_type"]
            | null
          user_id?: string | null
          wallet_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "swarms_cloud_users_wallets_transactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "swarms_cloud_users_wallets_transactions_wallet_id_fkey"
            columns: ["wallet_id"]
            isOneToOne: false
            referencedRelation: "swarms_cloud_users_wallets"
            referencedColumns: ["id"]
          },
        ]
      }
      swarms_framework_schema: {
        Row: {
          created_at: string | null
          data: Json | null
          id: string
          source_ip: unknown | null
          status: string | null
          swarms_api_key: string | null
          time_created: string
        }
        Insert: {
          created_at?: string | null
          data?: Json | null
          id?: string
          source_ip?: unknown | null
          status?: string | null
          swarms_api_key?: string | null
          time_created?: string
        }
        Update: {
          created_at?: string | null
          data?: Json | null
          id?: string
          source_ip?: unknown | null
          status?: string | null
          swarms_api_key?: string | null
          time_created?: string
        }
        Relationships: []
      }
      swarms_newsletter_subscribers: {
        Row: {
          created_at: string
          email: string
          id: number
          is_subscribed: boolean | null
          user_id: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: number
          is_subscribed?: boolean | null
          user_id?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: number
          is_subscribed?: boolean | null
          user_id?: string
        }
        Relationships: []
      }
      swarms_spreadsheet_session_agents: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          llm: string | null
          name: string
          original_agent_id: string | null
          output: string | null
          session_id: string | null
          status: string | null
          system_prompt: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          llm?: string | null
          name: string
          original_agent_id?: string | null
          output?: string | null
          session_id?: string | null
          status?: string | null
          system_prompt?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          llm?: string | null
          name?: string
          original_agent_id?: string | null
          output?: string | null
          session_id?: string | null
          status?: string | null
          system_prompt?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "swarms_spreadsheet_session_agents_original_agent_id_fkey"
            columns: ["original_agent_id"]
            isOneToOne: false
            referencedRelation: "swarms_spreadsheet_session_agents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "swarms_spreadsheet_session_agents_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "swarms_spreadsheet_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      swarms_spreadsheet_sessions: {
        Row: {
          created_at: string | null
          current: boolean | null
          id: string
          output: Json | null
          task: string | null
          tasks_executed: number | null
          time_saved: number | null
          timestamp: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          current?: boolean | null
          id?: string
          output?: Json | null
          task?: string | null
          tasks_executed?: number | null
          time_saved?: number | null
          timestamp?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          current?: boolean | null
          id?: string
          output?: Json | null
          task?: string | null
          tasks_executed?: number | null
          time_saved?: number | null
          timestamp?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          about_company: string | null
          avatar_url: string | null
          basic_onboarding_completed: boolean | null
          billing_address: Json | null
          company_name: string | null
          country_code: string | null
          credit_fraction: number | null
          credit_limit: number
          credit_plan: Database["public"]["Enums"]["credit_plan"]
          email: string | null
          full_name: string | null
          had_free_credits: boolean
          id: string
          job_title: string | null
          payment_method: Json | null
          referral: string | null
          signup_reason: string | null
          twenty_crm_id: string | null
          username: string | null
        }
        Insert: {
          about_company?: string | null
          avatar_url?: string | null
          basic_onboarding_completed?: boolean | null
          billing_address?: Json | null
          company_name?: string | null
          country_code?: string | null
          credit_fraction?: number | null
          credit_limit?: number
          credit_plan?: Database["public"]["Enums"]["credit_plan"]
          email?: string | null
          full_name?: string | null
          had_free_credits?: boolean
          id: string
          job_title?: string | null
          payment_method?: Json | null
          referral?: string | null
          signup_reason?: string | null
          twenty_crm_id?: string | null
          username?: string | null
        }
        Update: {
          about_company?: string | null
          avatar_url?: string | null
          basic_onboarding_completed?: boolean | null
          billing_address?: Json | null
          company_name?: string | null
          country_code?: string | null
          credit_fraction?: number | null
          credit_limit?: number
          credit_plan?: Database["public"]["Enums"]["credit_plan"]
          email?: string | null
          full_name?: string | null
          had_free_credits?: boolean
          id?: string
          job_title?: string | null
          payment_method?: Json | null
          referral?: string | null
          signup_reason?: string | null
          twenty_crm_id?: string | null
          username?: string | null
        }
        Relationships: []
      }
      swarms: {
        Row: {
          id: string
          user_id: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "swarms_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      drag_and_drop_flows: {
        Row: {
          id: string
          user_id: string
          flow_data: FlowData
          current: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          flow_data: FlowData
          current?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          flow_data?: FlowData
          current?: boolean
          created_at?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "drag_and_drop_flows_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_user_id_by_email: {
        Args: {
          email: string
        }
        Returns: {
          id: string
        }[]
      }
    }
    Enums: {
      credit_plan: "default" | "invoice"
      model_type: "text" | "vision"
      organization_member_invite_status:
        | "waiting"
        | "joined"
        | "expired"
        | "canceled"
      organization_member_role: "manager" | "reader"
      pricing_plan_interval: "day" | "week" | "month" | "year"
      pricing_type: "one_time" | "recurring"
      subscription_status:
        | "trialing"
        | "active"
        | "canceled"
        | "incomplete"
        | "incomplete_expired"
        | "past_due"
        | "unpaid"
        | "paused"
      user_agents_status: "approved" | "pending" | "rejected"
      user_prompts_status: "approved" | "pending" | "rejected"
      user_swarms_status: "approved" | "pending" | "rejected"
      user_tier: "tier1" | "tier2" | "tier3" | "tier4"
      users_wallets_transaction_type: "reduct" | "add"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

type Architecture = 'Concurrent' | 'Sequential' | 'Hierarchical'

type FlowData = {
  nodes: Array<{
    id: string
    type: string
    position: {
      x: number
      y: number
    }
    data: {
      id: string
      name: string
      type: string
      model: string
      systemPrompt: string
      clusterId?: string | null
      isProcessing?: boolean | null
      lastResult?: string | null
      dataSource?: string | null
      dataSourceInput?: string | null
      [key: string]: unknown
    }
  }>
  edges: Array<{
    id: string
    source: string
    target: string
    type?: string
    animated?: boolean
    style?: {
      stroke: string
    }
    markerEnd?: {
      type: string | MarkerType
      color: string
    }
    data?: {
      label: string
    }
    sourceHandle?: string | null
    targetHandle?: string | null
    [key: string]: unknown
  }>
  architecture: string | Architecture
  results: Record<string, string>
}
